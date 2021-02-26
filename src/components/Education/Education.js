import React, { Component } from 'react';
export default class Education extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="education">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="three columns">
            <a href="https://www.ivisolutions.ca/" target="_blank">
              <img className="ed-logo" src="images/logo-uni.png" alt="" />
            </a>
          </div>

          <div className="six columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Université de Sherbrooke</h3>
                <p className="info">Bachelor's Degree in Robotics Engineering <span>•</span> <em className="date">2017 - 2021</em></p>
                <p>GPA: 4.24/4.3</p>
                <p>
                  I am currently completing my 4th year of the co-op Robotics Engineering program.
                  I have also been a teaching assistant for the course GRO302: Mobile Robotics Semester Project.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
