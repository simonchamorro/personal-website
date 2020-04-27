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
                <p>Weiss M, Chamorro S, Girgis R, Luck M, Kahou SE, Cohen JP, Nowrouzezahrai D, Precup D, Golemo F, Pal C.</p>
                <p><i>In The Conference on Robot Learning (CoRL 2019).<a target="_blank" href="https://arxiv.org/abs/1910.13249"> [Paper]</a></i></p> 
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
