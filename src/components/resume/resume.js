import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
        <section id="resume">
          {/* Education
        ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>{resumeData.resume.education}</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>{resumeData.resume.epsi.schoolName}</h3>
                  <p className="info">
                    {resumeData.resume.epsi.degree} <span>•</span>{' '}
                    <em className="date">{resumeData.resume.epsi.date}</em>
                  </p>
                  <p>{resumeData.resume.epsi.description}</p>
                </div>
              </div>{' '}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>{resumeData.resume.tivoli.schoolName}</h3>
                  <p className="info">
                    {resumeData.resume.tivoli.degree} <span>•</span>{' '}
                    <em className="date">{resumeData.resume.tivoli.date}</em>
                  </p>
                  <p>{resumeData.resume.tivoli.description}</p>
                </div>
              </div>{' '}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>{resumeData.resume.uBordeaux.schoolName}</h3>
                  <p className="info">
                    {resumeData.resume.uBordeaux.degree} <span>•</span>{' '}
                    <em className="date">{resumeData.resume.uBordeaux.date}</em>
                  </p>
                  <p>{resumeData.resume.uBordeaux.description}</p>
                </div>
              </div>{' '}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>{resumeData.resume.descartes.schoolName}</h3>
                  <p className="info">
                    {resumeData.resume.descartes.degree} <span>•</span>{' '}
                    <em className="date">{resumeData.resume.descartes.date}</em>
                  </p>
                  <p>{resumeData.resume.descartes.description}</p>
                </div>
              </div>{' '}
              {/* item end */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End Education */}
          {/* Work
        ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>{resumeData.resume.work}</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>{resumeData.resume.cdiscount2.companyName}</h3>
                  <p className="info">
                    {resumeData.resume.cdiscount2.job} <span>•</span>{' '}
                    <em className="date">{resumeData.resume.cdiscount2.date}</em>
                  </p>
                  <p>{resumeData.resume.cdiscount2.description}</p>
                </div>
              </div>{' '}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>{resumeData.resume.cdiscount1.companyName}</h3>
                  <p className="info">
                    {resumeData.resume.cdiscount1.job} <span>•</span>{' '}
                    <em className="date">{resumeData.resume.cdiscount1.date}</em>
                  </p>
                  <p>{resumeData.resume.cdiscount1.description}</p>
                </div>
              </div>{' '}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>{resumeData.resume.reed.companyName}</h3>
                  <p className="info">
                    {resumeData.resume.reed.job} <span>•</span>{' '}
                    <em className="date">{resumeData.resume.reed.date}</em>
                  </p>
                  <p>{resumeData.resume.reed.description}</p>
                </div>
              </div>{' '}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>{resumeData.resume.tef.companyName}</h3>
                  <p className="info">
                    {resumeData.resume.tef.job} <span>•</span>{' '}
                    <em className="date">{resumeData.resume.tef.date}</em>
                  </p>
                  <p>{resumeData.resume.tef.description}</p>
                </div>
              </div>{' '}
              {/* item end */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End Work */}
          {/* Skills
        ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>{resumeData.resume.skills}</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              {/* <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p> */}
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand csharp" />
                    <em>C#</em>
                  </li>
                  <li>
                    <span className="bar-expand sql" />
                    <em>SQL</em>
                  </li>
                  <li>
                    <span className="bar-expand javascript" />
                    <em>Javascript</em>
                  </li>
                  <li>
                    <span className="bar-expand css" />
                    <em>CSS</em>
                  </li>
                  <li>
                    <span className="bar-expand html5" />
                    <em>HTML5</em>
                  </li>
                  <li>
                    <span className="bar-expand agile" />
                    <em>Agile</em>
                  </li>
                </ul>
              </div>
              {/* end skill-bars */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End skills */}
        </section>{' '}
        {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
