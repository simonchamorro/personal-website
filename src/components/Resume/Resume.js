import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        <div className="row">
          <div className="download">
            <p>
              <a target="_blank" href="./Simon-Chamorro-CV.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
            </p>
          </div>
        </div> 
      </section>
      </React.Fragment>
    );
  }
}
