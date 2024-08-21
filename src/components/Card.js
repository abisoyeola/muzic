import React from 'react'

const Card = (props) => {
    return (
        <div style={props.imagestyle}>
            <div style={props.colorstyle}>
                <h4>{props.songname}</h4>
                <h6>{props.artistname}</h6>
            </div>
        </div>
    )
}

export default Card
