import React from 'react'
import moment from 'moment'
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import { darkBlack } from 'material-ui/styles/colors'
import ChatIcon from 'material-ui/svg-icons/communication/chat'

const Message = ({ message }) => (
    <div>
        <ListItem
            onClick={() => alert(message.message)}
            leftAvatar={
                <Avatar
                    src={message.avatar}
                    icon={<ChatIcon />}
                />
            }
            primaryText={message.user || message.email}
            secondaryText={
                <p>
                    <span style={{ color: darkBlack }}>
                        {moment(message.timestamp).format('DD/MM/YY HH:mm')}
                    </span> --
                    {message.message}
                </p>
            }
            secondaryTextLines={2}
        />
    </div>
)

export default Message