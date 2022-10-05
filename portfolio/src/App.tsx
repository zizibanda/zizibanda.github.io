import React from "react";
import "./App.css";
import Carousel from "./Components/Carousel";
import DiscordSlide from "./Components/DiscordSlide";
import MinesweeperSlide from "./Components/MinesweeperSlide";
import YumSlide from "./Components/YumSlide";

const profile = `I am a software developer with a strong passion for Quality Assurance and aspiration to grow my career as a software developer. 
I specialise in establishing and building manual and automated test suites using various different testing frameworks. 
I take lots of pride in advocating strong testing practices whilst also influencing others to assure quality. 
I am determined to solve and/or detect problems in an innovative manner, with front-end development, software testing and music as my interests.`;

function App() {
  return (
    <div className="Portfolio">
      <header className="Portfolio-header" id="home">
        <div className="title-image-container">
          <div className="titles">
            <h1 className="titleFormat">ZIZI BANDA</h1>
            <h3 className="titleFormat">QA ENGINEER</h3>
          </div>
          <img
            src="/ZiziPicture.png"
            alt="ZiziImage"
            style={{ width: "200px", height: "auto", marginLeft: "30px" }}
          ></img>
        </div>
        {/* Add Socials Here */}
        <div className="Socials" style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="column">
              <a
                href="https://www.linkedin.com/in/zizibanda/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/LinkedIn.png"
                  width="55px"
                  height="auto"
                  alt="Zizi LinkedIn"
                ></img>
              </a>
            </div>
            <div className="column">
              <a
                href="https://github.com/johnZbanda"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/GithubIcon.png"
                  width="55px"
                  height="auto"
                  alt="Zizi Github"
                ></img>
              </a>
            </div>
            <div className="column">
              <a
                href="mailto:johnzkbanda@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/EmailIcon.png"
                  width="55px"
                  height="auto"
                  alt="Zizi Email"
                ></img>
              </a>
            </div>
            <div className="column">
              <a href="Zizi Banda CV.pdf" target="_blank" rel="noreferrer">
                <img
                  src="/FileIcon.png"
                  width="55px"
                  height="auto"
                  alt="Zizi CV"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="profile">
        <h2 className="titleFormat">PROFILE</h2>

        <p>{profile}</p>
      </section>

      {/* Add Skills */}

      <section id="skills">
        <h2 className="titleFormat">SKILLS</h2>

        {/* Cypress Playwright Specflow Postman Mocha Cucumber */}
        <div className="row">
          <div className="column">
            <img
              src="/Playwright.png"
              width="auto"
              height="100px"
              alt="Playwright"
            ></img>
          </div>
          <div className="column">
            <img
              src="/Postman.png"
              width="auto"
              height="100px"
              alt="Cypress Logo 3"
            ></img>
          </div>
          <div className="column">
            <img src="/Mocha.png" width="auto" height="100px" alt="Mocha"></img>
          </div>
          <div className="column">
            <img
              src="\Cucumber.svg"
              width="auto"
              height="100px"
              alt="Gherkin/Cucumber"
            ></img>
          </div>
          <div className="column">
            <img
              src="/SpecFlow.png"
              width="auto"
              height="100px"
              alt="SpecFlow"
            ></img>
          </div>
          <div className="column">
            <img
              src="/cypressLogo.png"
              width="auto"
              height="100px"
              alt="Cypress Logo"
            ></img>
          </div>
        </div>

        <hr></hr>

        <div className="row">
          <div className="column">
            <img
              src="JSIcon.png"
              width="auto"
              height="100px"
              alt="JS Logo"
            ></img>
          </div>

          <div className="column">
            <img
              src="TSIcon.png"
              width="auto"
              height="100px"
              alt="TS Logo"
            ></img>
          </div>

          <div className="column">
            <img
              src="HTMLIcon.png"
              width="auto"
              height="100px"
              alt="HTML Logo"
            ></img>
          </div>

          <div className="column">
            <img
              src="CSSIcon.png"
              width="auto"
              height="100px"
              alt="CSS Logo"
            ></img>
          </div>
        </div>

        <hr></hr>

        <div className="row">
          <div className="column">
            <img
              src="CSharp.png"
              width="auto"
              height="100px"
              alt="C# Logo"
            ></img>
          </div>

          <div className="column">
            <img
              src="JavaIcon.png"
              width="auto"
              height="100px"
              alt="Java Logo"
            ></img>
          </div>

          <div className="column">
            <img
              src="PythonIcon.png"
              width="auto"
              height="100px"
              alt="Python Logo"
            ></img>
          </div>
        </div>

        <hr></hr>

        <div className="row">
          <div className="column">
            <img
              src="MySQLIcon.png"
              width="100px"
              height="auto"
              alt="SQL Logo"
            ></img>
          </div>

          <div className="column">
            <img
              src="GitIcon.png"
              width="100px"
              height="auto"
              alt="Git Logo"
            ></img>
          </div>

          <div className="column">
            <img
              src="JIRA.png"
              width="auto"
              height="100px"
              alt="Jira Logo"
            ></img>
          </div>
        </div>

        <hr></hr>
      </section>

      {/* Add Projects - Find Carousel package TODO*/}
      <section id="projects">
        <h2 className="titleFormat">PROJECTS</h2>
        
          <Carousel>
            <MinesweeperSlide />
            <YumSlide />
            <DiscordSlide />

          </Carousel>
      </section>

      {/* Add Contact Me */}
      <section id="contact">
        <h2 className="titleFormat">CONTACT ME</h2>
        <p>If you would like to get to know me, don't hesistate to connect on my socials or contact me via Email </p>
        <p>EMAIL: johnzkbanda@gmail.com</p>
        <p>UK, London</p>
        {/* Make Socials into another function so it is not repeated code */}
      </section>
    </div>
  );
}

export default App;
