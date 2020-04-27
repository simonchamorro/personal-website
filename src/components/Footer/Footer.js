import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>

      <div class="row">

         <div class="twelve columns">

            <ul class="social-links">
               <li><a target="_blank" href="https://www.linkedin.com/in/simon-chamorro/"><i className="fa fa-linkedin" /></a></li>
              <li><a target="_blank" href="https://github.com/simonchamorro"><i className="fa fa-github" /></a></li>
              <li><a target="_blank" href="mailto:simon.chamorro@usherbrooke.ca"><i className="fa fa-envelope" /></a></li>
            </ul>

            <ul class="copyright">
               <li>&copy; Copyright 2014 CeeVee</li>
               <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
            </ul>

          </div>

          <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>

        </div>

      </footer>
      </React.Fragment>
    );
  }
}
