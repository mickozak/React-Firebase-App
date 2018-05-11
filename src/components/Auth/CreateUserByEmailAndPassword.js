import React from 'react'

import { TextField, RaisedButton } from 'material-ui'

import PaperRefined from '../PaperRefined'

const CreateUserByEmailAndPassword = (props) => (
    <PaperRefined centered={true}>
        <h4>Register new user!</h4>
        <TextField
            name={'email'}
            type={'email'}
            placeholder={'Type your e-mail!'}
            value={props.emailValue}
            onChange={props.onEmailChange}
            fullWidth={true}
        />
        <TextField
            name={'password'}
            type={'password'}
            placeholder={'Type your password!'}
            value={props.passwordValue}
            onChange={props.onPasswordChange}
            fullWidth={true}
        />
        <TextField
            name={'retype-password'}
            type={'password'}
            placeholder={'Retype your password!'}
            value={props.retypePasswordValue}
            onChange={props.onRetypePasswordChange}
            fullWidth={true}
        />
        <RaisedButton
            label={'Register!'}
            onClick={props.onRegisterClick}
        />
    </PaperRefined>
)

export default CreateUserByEmailAndPassword