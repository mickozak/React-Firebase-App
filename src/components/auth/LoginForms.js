import React from 'react'
import {auth, googleProvider} from "../../firebase";
import LogInByGoogle from './LoginByGoogle'

class LoginForms extends React.Component {

    logInByGoogle = () => auth.signInWithPopup(googleProvider)

    render() {
        return (
            <div>
                <LogInByGoogle
                    onLogInClick={this.logInByGoogle}
                />
            </div>
        )
    }
}

export default LoginForms