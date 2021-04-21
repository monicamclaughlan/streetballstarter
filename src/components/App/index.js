import React from 'react';
import './styles.css';
// COMPONENTS
import Title from '../Title';
// IMPORT DATA
import parksArr from '../parkData'
// console.log('Parks array', parksArr)
import Parks from '../ParkInfo/Parks'
import Park from '../ParkInfo/Parks/Park'
import ParkImage from '../ParkInfo/ParkImage'

export default function App() {

  const parks = parksArr.map((park, index) => { 
  return (
    <Park 
      {...park}
      key={index}
    />
  )
})
  
  return (
    <div className="App">
      <main>
        <Title />
        <section className="items-container">
          <section id="items">
           {/* Parks Component Goes Here */}
           <ul>        
             {parks}
           </ul>   
          </section>
          <section id="image">
            {/* ParkImage Component Goes Here */}
            <ParkImage  name={parks[0].props.name} url={parks[0].props.url}/>
          </section>
        </section>
      </main>
    </div>
  );
}
