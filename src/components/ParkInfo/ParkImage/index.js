import React from 'react'
import './styles.css';

const ParkImage = ({url, name}) => {
    return (
       <section id="park-info-container" style={{backgroundImage:'url(' + url + ")"}}>
            <div id="title"> {name}</div>
        </section>  
    )
}
// "url(" + url + ")"
export default ParkImage
