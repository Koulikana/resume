import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import resumeDataEn from './resumeDataEn';
import resumeDataFr from './resumeDataFr';

class App extends Component {
  constructor() {
    super();

    this.state = {
      resumeData: resumeDataFr,
    };

    this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleLanguage() {
    if (this.state.resumeData === resumeDataFr) {
      this.setState({
        resumeData: resumeDataEn,
      });
    } else {
      this.setState({
        resumeData: resumeDataFr,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header resumeData={this.state.resumeData} handleLanguage={this.handleLanguage} />
        <About resumeData={this.state.resumeData} />
        <Resume resumeData={this.state.resumeData} />
        <Portfolio resumeData={this.state.resumeData} />
        <Testimonials resumeData={this.state.resumeData} />
        <ContactUs resumeData={this.state.resumeData} />
        <Footer resumeData={this.state.resumeData} />
      </div>
    );
  }
}
export default App;
