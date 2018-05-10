import React from 'react'
import {database} from "../firebase";
import {mapObjectToArray} from '../utils'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import moment from 'moment'

class Chat extends React.Component {
    state = {
        name: 'Michal',
        newMessage: '',
        message: null
    }

    componentDidMount() {
        database.ref('/chat').on('value', (snapshot) => (
            this.setState({
                messages: mapObjectToArray(snapshot.val()).reverse()
            })
        ))
    }

    onNewMessageChangeHandler = (e, value) => this.setState({newMessage: value})

    addMessage = () => database.ref('/chat').push({
        message: this.state.newMessage,
        user: this.state.name,
        timestamp: Date.now(),
    }).then(() => this.setState({newMessage: ''}))

    render() {
        return (
            <div>
                <TextField
                    fullWidth={true}
                    rows={3}
                    onChange={this.onNewMessageChangeHandler}
                    value={this.state.newMessage}
                />

                <RaisedButton
                    onClick={this.addMessage}
                    label={'Send'}
                    primary={true}
                    fullWidth={true}
                />
                <div>
                    {
                        !this.state.messages ?
                            <MenuItem>Ładowanie...</MenuItem>
                            :
                            this.state.messages.map(message => (
                                <MenuItem key={message.key}>
                                    <span>({moment(message.timestamp).format('DD-MM-YY HH:mm')})</span>
                                    <b>{message.user}:</b>
                                    <span>{message.message}</span>
                                </MenuItem>
                            ))
                    }

                </div>
            </div>
        )
    }
}

export default Chat