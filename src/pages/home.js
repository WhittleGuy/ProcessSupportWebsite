import React, { Component } from "react";
import pslogo from "../images/processsupport.svg";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="logo-container">
          <div className="header">
            <h1>ITMS Process Support</h1>
          </div>
        </div>
        <div className="text-container">
          <h2>Who We Are</h2>
          <p>
            Process Support consists of four full-time staff members, with the
            majority of our staff being student producers.
          </p>

          <p>
            We produce technical documentation, coordinate the hiring and
            scheduling of student producers, and design training for the
            department.
          </p>

          <p>
            Members of Process Support work all over campus, with most operating
            out of control rooms. Process Support also boasts top-tier remote
            producers, regularly running doubles out of modified classrooms, and
            testing new forms of production.
          </p>
        </div>
        {/*<div className="break">
          <span></span>
    </div>*/}

        <div className="text-container">
          <h2>Zoom Support</h2>
          <p>
            Process Support manages all Zoom support that the IT Help Desk
            cannot resolve.
            <br />
            Usually, issues with Zoom can be solved by directing the complainant
            to the{" "}
            <a href="https://zoom.us/test">
              Zoom Test Meeting <i className="fas fa-external-link-alt"></i>
            </a>
            .<br />
            Additional help can be found at{" "}
            <a href="https://support.zoom.us/hc/en-us">
              Zoom Support <i className="fas fa-external-link-alt"></i>
            </a>
            . Logging into zoom.us also gives you access to live help chat with
            a Zoom tech support agent.
          </p>
        </div>
        <br />
        <br />

        {/*<div className="text-container">
          <h2>Contact Us</h2>
          <p>
            Interested in a job? We hire students before every fall semester!
            When available, details for our job openings can be found below.
          </p>
        </div>

        <div className="job-container">
          <h4 className="offer">No Openings</h4>
        </div>*/}
      </div>
    );
  }
}

export default Home;
