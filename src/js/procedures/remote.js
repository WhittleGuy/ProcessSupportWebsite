import React, { Component } from "react";

class Remote extends Component {
  render() {
    return (
      <div className="doc-div">
        <iframe
          title="remote"
          className="doc"
          src="https://docs.google.com/document/d/e/2PACX-1vQ0JtPGo2YnnSzOuX0uqX9bbzNEQ1cfJZGaU8icYRo_iIfOmtRAFbUZH6vflkSELRwqV9vBEzcW82ec/pub?embedded=true"
        ></iframe>
      </div>
    );
  }
}

export default Remote;
