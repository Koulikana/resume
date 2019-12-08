import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
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
              <ul className="copyright">
                <li>© Copyright 2014 CeeVee</li>
                <li>
                  Design by{' '}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
                <li>Photograph shot by me</li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>{' '}
        {/* Footer End*/}
      </React.Fragment>
    );
  }
}
