import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h1 className="title">ITMS Process Support</h1>
        <div className="footer-container">
          {/*} <div className="footer-object">
            <h3>Find a problem?</h3>
            <p>Contact Brandon Whittle with details</p>
    </div>*/}
        </div>
        {/*<p className="disclaimer">
          This website does not represent, nor have any affiliation with
          Missouri S&amp;T.
  </p>*/}
        <h4 className="signature">
          Made with <span role="img">❤️</span>
        </h4>
        <p>
          <i className="fa fa-copyright" /> 2020{" "}
          <a
            href="https://www.brandonwhittle.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Brandon Whittle
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
