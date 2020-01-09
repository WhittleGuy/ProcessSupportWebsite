import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h3 className="contact-name">{this.props.name}</h3>
        <div className="phone">
          <i className="fa fa-phone-alt"></i>
          <p>{this.props.phone}</p>
        </div>
        <div className="email">
          <i className="fa fa-envelope"></i>
          <p>{this.props.email}</p>
        </div>
        <div className="use">
          <p>{this.props.use}</p>
        </div>
        <div className="additional">
          <p>{this.props.additional}</p>
        </div>
      </div>
    );
  }
}

export default Contact;
