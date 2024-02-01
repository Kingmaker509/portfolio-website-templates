import React from "react";
import Intro from "../componets/Intro";
import About from "../componets/About";
import Resume from "../componets/Resume";
import Services from "../componets/Services";
import Skills from "../componets/Skills";
import Project from "../componets/Project";

const Home = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">
          <div class="navbar-brand">HIREN</div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item px-2">
                <a class="nav-link" aria-current="page" href="#intro">
                  Home
                </a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link" aria-current="page" href="#resume">
                  Resume
                </a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link" aria-current="page" href="#services">
                  Services
                </a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link" aria-current="page" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link" aria-current="page" href="#project">
                  Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid" id="intro">
        <Intro />
      </div>

      <div className="container-fluid" id="about">
        <About />
      </div>

      <div className="container-fluid" id="resume">
        <Resume />
      </div>

      <div className="container-fluid" id="services">
        <Services />
      </div>

      <div className="container-fluid" id="skills">
        <Skills />
      </div>

      <div className="container-fluid" id="project">
        <Project />
      </div>
    </>
  );
};

export default Home;
