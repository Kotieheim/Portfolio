import React, { Component } from "react";
import profilepic from "../images/profilepic.png";
import "./About.css";

export class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="columns">
            <img className="profile-pic" src={profilepic} alt="" />
          </div>

          <div className=" columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
