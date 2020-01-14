import React, { Component } from "react";
import Room from "../components/room";

class CompSci extends Component {
  render() {
    return (
      <>
        <Room
          name="CS 209"
          phone="573.341.6255"
          address="500 W 15th St"
          logbook="https://docs.google.com/spreadsheets/d/1RDoMlNBLQ-B0OKjzlS_jzPkaub-c5OeMDyyOGUjlAWk/edit"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=590437178&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>
      </>
    );
  }
}

export default CompSci;
