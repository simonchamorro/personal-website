import React, { Component } from 'react';
export default class Experience extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="experience">
        <div className="exp" id="exp-huawei">
          <div className="row">
            <div className="eight columns main-col">
              <h2>Huawei Self-Driving</h2>
              <h4>Markkaham, ON, Canada - Jan 2020 to Apr 2020</h4>
              <p>I worked in Huawei’s Planning team as a research intern, which is a sub-team of the self-driving team. 
              My work consisted in solving path-planning problems with learning-based methods. 
              My tasks have included adding features to our simulator as well as researching and implementing Reinforcement Learning methods such as Soft Actor-Critic to solve motion planning tasks.
              </p>
              
            </div> {/* end .main-col */}
            <div className="four columns">
              <a href="http://www.noahlab.com.hk/#/home" target="_blank">
                <img className="img-exp" src="images/logo-huawei.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="exp" id="exp-mila">
          <div className="row">
            <div className="eight columns main-col">
              <h2>Mila</h2>
              <h4>Montreal, QC, Canada - Apr 2019 to Sept  2019</h4>
              <p>During my summer internship at Mila, I contributed to the NAVI project (Navigation Agents for the Visually Impaired). 
              In our endeavor to create a navigation assistant for the blind and visually impaired, we created a dataset and an environment to train RL navigation agents and proposed a baseline model. 
              This work resulted in a publication at CORL 2019.
              </p>
              
            </div> {/* end .main-col */}
            <div className="four columns">
              <a href="https://mila.quebec/en/" target="_blank">
                <img className="img-exp" src="images/logo-mila.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="exp" id="exp-ivi">
          <div className="row">
            <div className="eight columns main-col">
              <h2>Institut du Véhicule Innovant</h2>
              <h4>Saint-Jêrome, QC, Canada - Sept 2018 to Dec 2018</h4>
              <p>During my first internship, I contributed to an autonomous tractor project at the Institut du Véhicule Innovant. 
              Being part of the software development team, I implemented mission management algorithms and developed a user interface for the tractor as well as a sensor monitoring system.
              </p>
              
            </div> {/* end .main-col */}
            <div className="four columns">
              <a href="https://www.ivisolutions.ca/" target="_blank">
                <img className="img-exp logo-pad" src="images/logo-ivi.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="exp" id="exp-frv">
          <div className="row">
            <div className="eight columns main-col">
              <h2>Front Row Ventures</h2>
              <h4>Montreal, QC, Canada - Apr 2019 to Apr 2020</h4>
              <p>Front Row Ventures is Canada’s first student-led VC fund. 
               As an investment associate, I sourced investment opportunities in student-founded startups.
               I also met with founders and performed due diligence to evaluate their business and make investment decisions with the rest of the team.
              </p>
              
            </div> {/* end .main-col */}
            <div className="four columns">
              <a href="https://frontrow.ventures/" target="_blank">
                <img className="img-exp" src="images/frv.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="exp" id="exp-robotique-udes">
          <div className="row">
            <div className="eight columns main-col">
              <h2>Robotique UdeS</h2>
              <h4>Sherbrooke, QC, Canada - Jan 2019 to Present</h4>
              <p>Robotique UdeS is a student group focused on technical projects as well as giving back to community through initiatives like Robot en 100H, Robotics mentoring and others. 
              As a founding member, I participated in the structuring and branding of the group and I am now responsible for communications and marketing.

              I am also part of our Rover Software team. 
              We are currently working on our rover in order to compete in the Canadian International Rover Challenge for the first time this summer.
              </p>
              
            </div> {/* end .main-col */}
            <div className="four columns">
              <a href="https://robotiqueudes.ca" target="_blank">
                <img className="img-exp logo-pad" src="images/logo-robotique-udes.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="exp" id="exp-startup-weekend">
          <div className="row">
            <div className="eight columns main-col">
              <h2>Startup Weekend</h2>
              <h4>Sherbrooke, QC, Canada - Jan 2019 to Mar 2019</h4>
              <p>As the lead organizer, I was responsible over a team of 5 co-organizers to plan the 7th Startup Weekend in Sherbrooke. 
              Startup Weekends are 54-hour events where developers, designers, marketers, product managers, and startup enthusiasts come together to share ideas, form teams, build products, and launch startups.
              </p>
              
            </div> {/* end .main-col */}
            <div className="four columns">
              <a href="https://startupweekend.org/" target="_blank">
                <img className="img-exp" src="images/startup-weekend.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>

      </section> 
      </React.Fragment>
    );
  }
}

