import React, { Component } from "react";
import Room from "../components/room";

class Toomey extends Component {
  render() {
    return (
      <>
        <Room
          name="ME 260"
          phone="573.341.4538"
          address="400 W 13th St"
          logbook="https://docs.google.com/spreadsheets/d/1OyX5r4Wrk0G53y2a7wydWuhgBuO2NjcYX5L9_6m9JQ0/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=693979290&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>
      </>
    );
  }
}

export default Toomey;
