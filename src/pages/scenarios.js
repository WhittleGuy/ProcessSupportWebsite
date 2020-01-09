import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
import Studio from "../js/procedures/studio.js";
import Remote from "../js/procedures/remote.js";
import Receive from "../js/procedures/receive.js";
import Springfield from "../js/procedures/springfield.js";

class Procedures extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="procedures-container">
          <Studio />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="procedures-container">
          <Remote />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="procedures-container">
          <Receive />
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="procedures-container">
          <Springfield />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="procedures">
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Local</Tab>
            <Tab>Remote</Tab>
            <Tab>DIS</Tab>
            <Tab>Springfield</Tab>
          </Tabs>

          <section className="projects-grid">{this.toggleCategories()}</section>
        </div>
      </div>
    );
  }
}

export default Procedures;
