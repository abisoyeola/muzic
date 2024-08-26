import React from 'react'

const Card = (props) => {
    return (
        <div style={props.imagestyle}>
            
            <div style={props.colorstyle}>
                
                <div style={{display:'flex', flexDirection:'column', paddingLeft:20, fontWeight:'bolder'}}>
                    <span style={{color:'white'}}>{props.songname1}</span>
                    <span style={{color:'yellow'}}>{props.songname2}</span>
                </div>
                <h6 style={{textAlign:'right', marginRight:20}}>{props.artistname}</h6>
            </div>
            <div style={{marginLeft:70,marginTop:90, position:'absolute'}}>{props.play}</div>
        </div>
    )
}

export default Card
