import React from 'react'
import './styles.css';

const Park = ({name, overall, color}) => {
    return (
    <li style={{backgroundColor:'white'}}>
           <span className="parkName">{name}</span>
           <span className="rating" style={{borderColor:color}}>{overall}</span>
    </li> 
    )
}

export default Park

