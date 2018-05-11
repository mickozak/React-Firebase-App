import React from 'react'

import {auth} from '../../firebase'
import LoginForms from './LoginForms'



class Auth extends React.Component{
    state={
        isLoggedIn: false
    }

    componentDidMount(){
        auth.onAuthStateChanged(
            user=>{
                if(user){
                    this.setState({isLoggedIn: true})
                } else {
                    this.setState({isLoggedIn: false})
                }
            }
        )
    }

    render(){
        return(
            <div>
                {
                    this.state.isLoggedIn ?
                        this.props.children
                        :
                        <LoginForms/>
                }
            </div>
        )
    }
}

export default Auth