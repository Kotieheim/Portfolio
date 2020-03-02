import React, { Component } from "react";
import "./Resume.css";

export class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <h1>Education</h1>
        <div className="row education">
          <div className="columns"></div>

          <div className="columns">
            {resumeData.education &&
              resumeData.education.map(item => {
                return (
                  <div key={item.id} className="row item">
                    <div className="columns">
                      <h2>{item.UniversityName}</h2>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p className="info-content">{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="columns">
            <p></p>

            <div className="bars">
              <h2>Front End</h2>
              <p className="skills">
                {" "}
                JavaScript - ES6 - React - jQuery - HTML5 - CSS3 - NPM - AJAX -
                Bootstrap - Socket.io
              </p>
            </div>
            <div className="bars">
              <h2>Back End</h2>
              <p className="skills">
                {" "}
                Node.js - RESTful APIs - NPM - Express - SQL - PostgreSQL
              </p>
            </div>
          </div>
          <div className="bars">
            <h2>Additional Tools</h2>
            <p className="skills"> Git - GitHub - Slack - Photoshop - SEO</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
