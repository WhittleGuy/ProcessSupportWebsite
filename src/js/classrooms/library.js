import React, { Component } from "react";
import Room from "../components/room";

class Library extends Component {
  render() {
    return (
      <>
        <Room
          name="LIB G14"
          phone="573.341.7673"
          address="400 W 14th St"
          logbook="https://docs.google.com/spreadsheets/d/1F8-Sr6nVT64hEaX3-F_cBPMUjO-H5B8UJpQEFF45xcA/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=1593671970&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>

        <Room
          name="LIB 316"
          phone="573.341.4375"
          address="400 W 14th St"
          logbook="https://docs.google.com/spreadsheets/d/1GgI21xHrJ31F8hpKyyhus3vUwR3iofx0al5z0N00jkY/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=1725633543&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>
      </>
    );
  }
}

export default Library;
