import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/femaleavatar.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>{resumeData.about.title}</h2>
              <p>{resumeData.about.content}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Audrey COMLAN-CATARIA</span>
                    <br />
                    <span>
                      Bordeaux 33000,
                      <br />
                      FRANCE
                    </span>
                    <br />
                    {/* <span>(123)456-7890</span>
                    <br /> */}
                    <span>{resumeData.about.email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button">
                      <i className="fa fa-download" />
                      {resumeData.about.downloadResume}
                    </a>
                  </p>
                </div>
              </div>{' '}
              {/* end row */}
            </div>{' '}
            {/* end .main-col */}
          </div>
        </section>{' '}
        {/* About Section End*/}
      </React.Fragment>
    );
  }
}
