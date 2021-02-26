import React, { Component } from 'react';
export default class Publications extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="publications">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Publications</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>2019</h3>
                <p><b>Navigation Agents for the Visually Impaired: A Sidewalk Simulator and Experiments. </b></p>
                <p>Weiss M, <b>Chamorro S</b>, Girgis R, Luck M, Kahou SE, Cohen JP, Nowrouzezahrai D, Precup D, Golemo F, Pal C.</p>
                <p><i>Conference on Robot Learning (CoRL 2019).<a target="_blank" href="https://arxiv.org/abs/1910.13249"> [Paper]</a></i></p> 
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}


        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Work in Progress</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>2021</h3>
                <p><b>Multi-modal Gesture Recognition for Vehicle Teleoperation.</b></p>
                <p><b>S. Chamorro</b>, J.Collier, F. Grondin.</p>
                <p><i>Submitted to International Conference on Intelligent Robots and Systems (IROS 2021)</i></p> 

                <br></br>

                <p><b>Motion Planning for Autonomous Vehicles Using Reinforcement Learning in Presence of Uncertainty.</b></p>
                <p>K. Rezaee, P. Yadmellat, <b>S. Chamorro</b>.</p>
                <p><i>Submitted to International Conference on Robotics and Automation (ICRA 2021)</i></p> 
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
