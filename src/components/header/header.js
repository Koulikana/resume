import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  {resumeData.header.home}
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  {resumeData.header.about}
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  {resumeData.header.resume}
                </a>
              </li>
              {/* <li>
                <a className="smoothscroll" href="#portfolio">
                  {resumeData.header.works}
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  {resumeData.header.testimonials}
                </a>
              </li> 
              <li>
                <a className="smoothscroll" href="#contact">
                  {resumeData.header.contact}
                </a>
              </li> */}
              <li>
                <button onClick={this.props.handleLanguage}>Fr/En</button>
              </li>
            </ul>{' '}
            {/* end #nav */}
          </nav>{' '}
          {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3>
                {resumeData.header.city} <span>{resumeData.role}</span>, {resumeData.roleDescription}.{' '}
                {resumeData.header.beforeStartScrolling}{' '}
                <a className="smoothscroll" href="#about">
                  {resumeData.header.startScrolling}{' '}
                </a>
                {resumeData.header.learnMore}{' '}
                <a className="smoothscroll" href="#about">
                  {resumeData.header.aboutMe}
                </a>
                .
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a href={resumeData.linkedinLink}>
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href={resumeData.githubLink}>
                    <i className="fa fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>{' '}
        {/* Header End */}
      </React.Fragment>
    );
  }
}
