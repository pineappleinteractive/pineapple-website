import logo from '../assets/plogo.png';
import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

function About() {
    return (
        <div>
          <img src={logo} alt="Pineapple Interactive logo" width={'65%'} />
          {/* <div className="card"> */}
            <p>We build web apps and video games!</p>
          {/* <p className="read-the-docs"></p> */}
          <p style={{
            color: '#888',
            }}>
            Come back for more!
          </p>
        </div>
    )
};

export default About;