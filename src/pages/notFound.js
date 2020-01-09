import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h4>404</h4>
        <h1>It looks like this page is missing...</h1>
        <h4>It was moved, deleted, or didn't exist in the first place.</h4>
        <h4>
          Please try again later or contact the page admin for assistance.
        </h4>
      </div>
    );
  }
}

export default NotFound;
