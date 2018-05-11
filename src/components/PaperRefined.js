import React from 'react'
import Paper from 'material-ui/Paper'

const styles = {
    default: {
        margin: '20px',
        padding: '20px'
    },
    centered: {
        textAlign: 'center'
    }
}

const PaperRefined = (props) => (
    <Paper
        style={
            props.centered ?
                { ...styles.default, ...styles.centered }
                :
                styles.default
        }
    >
        {props.children}
    </Paper>
)

export default PaperRefined