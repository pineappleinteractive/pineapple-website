import { useState } from 'react'
import logo from './assets/plogo.png';
import './App.css';

function App() {

  return (
    <>
      <img src={logo} alt="Pineapple Interactive logo" width={'65%'} />
      <div className="card">
        <p>
          We build web apps and video games!
        </p>
      </div>
      <p className="read-the-docs">
        Come back for more!
      </p>
    </>
    // <div style={{
    //   backgroundColor: 'black',
    //   color: 'lime',
    //   padding: '2rem',
    //   fontSize: '2rem'
    // }}>
    //   ✅ Pineapple Interactive is LIVE!
    // </div>
  )
}

export default App
