import React from 'react';
import './styles.css';
// COMPONENTS
import Title from '../Title';
// IMPORT DATA

export default function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <section className="items-container">
          <section id="items">
           {/* Parks Component Goes Here */}
          </section>
          <section id="image">
            {/* ParkImage Component Goes Here */}
          </section>
        </section>
      </main>
    </div>
  );
}
