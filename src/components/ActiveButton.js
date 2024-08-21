import React from 'react'

const ActiveButton = (props) => {
    return (
        <button style={props.btn}>
            {props.content}
        </button>
    )
}

export default ActiveButton
