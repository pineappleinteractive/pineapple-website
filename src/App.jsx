import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PILogo from '/pin-int-logo-v03a.png';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={PILogo} alt="Pineapple Interactive logo" width={'75%'} />
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
