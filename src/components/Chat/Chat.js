import React from 'react'

import { auth, database } from '../../firebase'
import { mapObjectToArray } from '../../utils'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Message from './Message'

class Chat extends React.Component {
    state = {
        newMessage: '',
        messages: null
    }

    componentDidMount() {
        database.ref('/chat').on('value', (snapshot) => (
            this.setState({
                messages: mapObjectToArray(snapshot.val()).reverse()
            })
        ))
    }

    onNewMessageChangeHandler = (e, value) => this.setState({ newMessage: value })

    addMessage = () => {
        const newRefForMessage = database.ref('/chat').push({
            message: this.state.newMessage,
            user: auth.currentUser.displayName,
            email: auth.currentUser.email,
            avatar: auth.currentUser.photoURL,
            timestamp: Date.now(),
        }).then(() => this.setState({ newMessage: '' }))
    }

    render() {
        return (
            <div>
                <TextField
                    name={'message'}
                    onChange={this.onNewMessageChangeHandler}
                    value={this.state.newMessage}
                    fullWidth={true}
                />
                <RaisedButton
                    onClick={this.addMessage}
                    label={'Send!'}
                    primary={true}
                    fullWidth={true}
                />
                <div>
                    {
                        !this.state.messages ?
                            'Ładowanie...'
                            :
                            this.state.messages.map(message => (
                                <Message
                                    key={message.key}
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