import React from 'react'

import { auth } from '../../firebase'

import LogInForms from './LogInForms'
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import AppBar from "material-ui/AppBar";


class Auth extends React.Component {
    state = {
        isLoggedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({ isLoggedIn: true })
                } else {
                    this.setState({ isLoggedIn: false })
                }
            }
        )
    }

    render() {
        return (
            <div>
                <AppBar
                    showMenuIconButton={false}
                    title="REACT CHAT"
                    iconElementRight={
                        <IconButton onClick={() => auth.signOut()}>
                            <NavigationClose />
                        </IconButton>
                    }
                />
                {
                    this.state.isLoggedIn ?
                        this.props.children
                        :
                        <LogInForms />
                }
            </div>
        )
    }
}
export default Auth