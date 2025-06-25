import { useState } from 'react'
import logo from './assets/plogo.png';
import './App.css'

function App() {

  return (
    <>
      {/* <img src={logo} alt="Pineapple Interactive logo" width={'75%'} /> */}
      {/* <img src={PILogo} className="logo" alt="Pineapple Interactive logo" /> */}
      {/* <h1>Pineapple Interactive</h1> */}
      <div className="card">
        <p>
          We build web apps and video games!
        </p>
      </div>
      <p className="read-the-docs">
        Come back for more!
      </p>
    </>
  )
}

export default App
