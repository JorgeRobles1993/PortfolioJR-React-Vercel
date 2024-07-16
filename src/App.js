import React from 'react';
import './App.css';
import MyWork from './MyWork';
import AboutMe from './AboutMe';
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="/Videofondo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="section" id="home">
        <div className="content">
          <h1>Jorge Joan Robles</h1>
          <h2>Junior Web Developer</h2>
          <div className="buttons">
            <button onClick={() => document.getElementById('my-work').scrollIntoView({ behavior: 'smooth' })}>My Work</button>
            <button onClick={() => document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' })}>About Me</button>
          </div>
        </div>
      </div>
      <div id="my-work" className="section">
        <MyWork />
      </div>
      <div id="about-me" className="section">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
