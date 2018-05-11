import React from 'react'
import {auth, database} from "../../firebase";
import {mapObjectToArray} from '../../utils'
import ChatAppBar from './ChatAppBar'
import Message from '../chat/Message'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'




class Chat extends React.Component {
    state = {
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
        user: auth.currentUser.displayName,
        email: auth.currentUser.email,
        avatar: auth.currentUser.photoURL,
        timestamp: Date.now(),
    }).then(() => this.setState({newMessage: ''}))

    render() {
        return (
            <div>
                <ChatAppBar/>
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
                                <Message
                                    message={message}
                                />

                            ))
                    }

                </div>
            </div>
        )
    }
}

export default Chat