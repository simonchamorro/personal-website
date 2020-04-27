
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Publications from './components/Publications/Publications';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Experience />
        <Education />
        <Projects />
        <Publications />
        <Footer />
      </div>
    );
  }
}
export default App;