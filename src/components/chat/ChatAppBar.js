import React from 'react'

import {auth} from "../../firebase";

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

const ChatAppBar = (props) => (
    <AppBar
        showMenuIconButton={false}
        iconElementRight={
            <IconButton onClick={()=>auth.signOut()}>
                <NavigationClose/>
            </IconButton>}
    />
)

export default ChatAppBar