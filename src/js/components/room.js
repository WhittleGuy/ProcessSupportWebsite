import React, { Component } from "react";
import Collapsible from "react-collapsible";

class Room extends Component {
  render() {
    return (
      <div className="card">
        <div className="general-info">
          <div className="photo-container">
            <img src={this.props.image} alt={this.props.name} />
          </div>
          <div className="info-container">
            <h3>{this.props.name}</h3>
            <div className="phone">
              <i className="fa fa-phone-alt"></i>
              <p>{this.props.phone}</p>
            </div>
            <div className="location">
              <i className="fa fa-map-marker-alt"></i>
              <p>{this.props.address}</p>
            </div>
            <div className="room-links">
              <a
                className="cam"
                target="_blank"
                rel="noopener noreferrer"
                href={
                  "http://" +
                  this.props.name.replace(/\s/, "") +
                  "-cam-i1.device.mst.edu"
                }
              >
                Inst
              </a>

              <a
                className="cam"
                target="_blank"
                rel="noopener noreferrer"
                href={
                  "http://" +
                  this.props.name.replace(/\s/, "") +
                  "-cam-s1.device.mst.edu"
                }
              >
                Stud
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.logbook}
              >
                Logbook
              </a>
            </div>
          </div>
        </div>
        <Collapsible trigger="Summary">
          <div className="summary-sheet">
            <iframe
              className="room-info"
              title={this.props.name}
              width="825px"
              height="400px"
              src={this.props.summary}
              frameborder="0"
            ></iframe>
          </div>
        </Collapsible>
      </div>
    );
  }
}

export default Room;
