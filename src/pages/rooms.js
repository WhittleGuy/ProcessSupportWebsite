import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

import Bert from "../js/classrooms/bert";
import ButlerCarlton from "../js/classrooms/butler-carlton";
import Cent from "../js/classrooms/cent";
import CompSci from "../js/classrooms/comp-sci";
import Ece from "../js/classrooms/ece";
import EMan from "../js/classrooms/e-man.js";
import Fulton from "../js/classrooms/fulton";
import Hss from "../js/classrooms/hss";
import McNutt from "../js/classrooms/mcnutt.js";
import Springfield from "../js/classrooms/springfield.js";
import StLouis from "../js/classrooms/st-louis.js";
import Library from "../js/classrooms/library.js";
import Toomey from "../js/classrooms/toomey.js";

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="room-container">
          <Bert />
          <ButlerCarlton />
          <Cent />
          <CompSci />
          <Ece />
          <EMan />
          <Fulton />
          <Hss />
          <Library />
          <Toomey />
          <McNutt />
          <Springfield />
          <StLouis />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="room-container">
          <Bert />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="room-container">
          <ButlerCarlton />
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="room-container">
          <Cent />
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div className="room-container">
          <CompSci />
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div className="room-container">
          <Ece />
        </div>
      );
    } else if (this.state.activeTab === 6) {
      return (
        <div className="room-container">
          <EMan />
        </div>
      );
    } else if (this.state.activeTab === 7) {
      return (
        <div className="room-container">
          <Fulton />
        </div>
      );
    } else if (this.state.activeTab === 8) {
      return (
        <div className="room-container">
          <Hss />
        </div>
      );
    } else if (this.state.activeTab === 9) {
      return (
        <div className="room-container">
          <Library />
        </div>
      );
    } else if (this.state.activeTab === 10) {
      return (
        <div className="room-container">
          <Toomey />
        </div>
      );
    } else if (this.state.activeTab === 11) {
      return (
        <div className="room-container">
          <McNutt />
        </div>
      );
    } else if (this.state.activeTab === 12) {
      return (
        <div className="room-container">
          <Springfield />
        </div>
      );
    } else if (this.state.activeTab === 13) {
      return (
        <div className="room-container">
          <StLouis />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="rooms">
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>All</Tab>
            <Tab>Bertelsmeyer</Tab>
            <Tab>Butler-Carlton</Tab>
            <Tab>Centennial</Tab>
            <Tab>Computer Science</Tab>
            <Tab>ECE</Tab>
            <Tab>EMan</Tab>
            <Tab>Fulton</Tab>
            <Tab>HSS</Tab>
            <Tab>Library</Tab>
            <Tab>ME</Tab>
            <Tab>McNutt</Tab>
            <Tab>Springfield</Tab>
            <Tab>St. Louis</Tab>
          </Tabs>

          <section className="projects-grid">{this.toggleCategories()}</section>
        </div>
      </div>
    );
  }
}

export default Room;
