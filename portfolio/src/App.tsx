import React from "react";
import "./App.css";

const profile = `I am a software developer with a strong passion for Quality Assurance and aspiration to grow my career as a software developer. 
I specialise in establishing and building manual and automated test suites using various different testing frameworks. 
I take lots of pride in advocating strong testing practices whilst also influencing others to assure quality. 
I am determined to solve and/or detect problems in an innovative manner, with front-end development, software testing and music as my interests.`;

function App() {
  return (
    <div className="App">
      <header className="App-header" id="home">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="titleFormat">ZIZI BANDA</h1>
        <h3 className="titleFormat">QA ENGINEER</h3>
        {/* Add Socials Here */}
        <p>{profile}</p>
        {/* Add Skills */}
        {/* Add Projects */}
        {/* Add Contact Me */}
      </header>
    </div>
  );
}

export default App;
