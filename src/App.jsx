import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import logo from './assets/plogo.png'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import './App.css';

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
    // <div>
    //   <img src={logo} alt="Pineapple Interactive logo" width={'65%'} />
    //   {/* <div className="card"> */}
    //     <p>We build web apps and video games!</p>
    //   {/* <p className="read-the-docs"></p> */}
    //   <p style={{
    //     color: '#888',
    //     }}>
    //     Come back for more!
    //   </p>
    // </div>
  )
}

export default App
