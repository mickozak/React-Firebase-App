
import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import PaperRefined from '../PaperRefined'

const LogInByGoogle = (props) => (
    <PaperRefined centered={true}>
        <RaisedButton
            secondary={true}
            label={'Log In By Google'}
            onClick={props.onLogInClick}
        />
    </PaperRefined>
)

export default LogInByGoogle