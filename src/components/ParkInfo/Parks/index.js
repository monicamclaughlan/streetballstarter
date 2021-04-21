import React from 'react'
import Park from './Park'
import './styles.css'


const Parks = (props) => { 
    return (
            <li> <Park name={props.name} rating={props.rating}/></li>
    )
}

export default Parks
