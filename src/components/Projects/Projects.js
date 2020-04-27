import React, { Component } from 'react';
export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
      
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/rover.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Rover</h5>
                        <p>Software Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/sevn.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>SEVN</h5>
                        <p>RL Environment</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/racecar.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>UdeS racecar</h5>
                        <p>Software Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/tracking-cam.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Tracking Camera</h5>
                        <p>Software Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/website.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>This Website</h5>
                        <p>Software Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/ros.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>ROS</h5>
                        <p>Blog Post</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
            
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
        --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-rover.jpg" alt="" />
            <div className="description-box">
              <h4>Robotique UdeS Rover</h4>
              <p></p>
              <span className="categories"><i className="fa fa-tag" />Robotics, Software Development</span>
            </div>
            <div className="link-box">
              <a target="_blank" href="https://github.com/robotique-udes/rover_udes">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-sevn.jpg" alt="" />
            <div className="description-box">
              <h4>SEVN: Sidewalk Environment for Visual Navigation</h4>
              <p></p>
              <span className="categories"><i className="fa fa-tag" />Reiforcement Learning, Navigation</span>
            </div>
            <div className="link-box">
              <a href="https://mweiss17.github.io/SEVN/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-racecar.jpg" alt="" />
            <div className="description-box">
              <h4>UdeS Racecar</h4>
              <p></p>
              <span className="categories"><i className="fa fa-tag" />Robotics, Software</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/simonchamorro/udes_racecar">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-tracking-cam.jpg" alt="" />
            <div className="description-box">
              <h4>Tracking Camera</h4>
              <p></p>
              <span className="categories"><i className="fa fa-tag" />Robotics, Software</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/simonchamorro/tracking_camera">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-website.png" alt="" />
            <div className="description-box">
              <h4>This Website</h4>
              <p></p>
              <span className="categories"><i className="fa fa-tag" />Web Development, React</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/simonchamorro/personal-website">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/ros.jpg" alt="" />
            <div className="description-box">
              <h4>ROS Blog Post</h4>
              <p></p>
              <span className="categories"><i className="fa fa-tag" />ROS, Writing</span>
            </div>
            <div className="link-box">
              <a href="https://robotiqueudes.ca/ros-robot-operating-system/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
        </div> {/* row End */}
      </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}
