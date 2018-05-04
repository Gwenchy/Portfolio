import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Divs from "./components/Divs";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import ReallySmoothScroll from "really-smooth-scroll";

ReallySmoothScroll.shim();
// import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="container-fluid noPad">
        <Nav/>
        <div className="mainPitch">
          <h1>Developer That Love Technology</h1>
        </div>
        <div className="row-fluid nothing"/>
        <Divs>
          <About/>
        </Divs>
        <Divs>
          <Projects/>
        </Divs>
        <Divs>
          <Contact/>
        </Divs>
        <div className="row-fluid notMuch"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
