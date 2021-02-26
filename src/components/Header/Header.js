import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#experience">Experience</a></li>
            <li><a className="smoothscroll" href="#education">Education</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#publications">Publications</a></li>
            <li><a target="_blank" href="Simon-Chamorro-CV.pdf">CV</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-img">
            <img className="banner-pic" src="images/me.jpg" alt="" />
          </div>
          <div className="banner-text">
            <h1 className="responsive-headline">Simon Chamorro</h1>
            <h3>I'm a 4th-year <span>Robotics Engineering</span> student at the <span>University of Sherbrooke.</span> I am interested in <span>Robotics Software</span> and <span>Artificial Intelligence</span>. 
              Scroll to learn more about my projects and don't hesitate to contact me!</h3>
            <hr />
            <ul className="social">
              <li><a target="_blank" href="https://www.linkedin.com/in/simon-chamorro/"><i className="fa fa-linkedin" /></a></li>
              <li><a target="_blank" href="https://github.com/simonchamorro"><i className="fa fa-github" /></a></li>
              <li><a target="_blank" href="mailto:simon.chamorro@usherbrooke.ca"><i className="fa fa-envelope" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#experience"><i className="icon-down-circle" /></a>
        </p>
      </header> 
      </React.Fragment>
    );
  }
}
