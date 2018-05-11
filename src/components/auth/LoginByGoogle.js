import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

const LoginByGoogle = (props) => (
    <div>
        <RaisedButton
            secondary={true}
            label={'Log In By Google'}
            onClick={props.onLogInClick}
        />
    </div>
)

export default LoginByGoogle