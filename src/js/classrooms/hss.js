import React, { Component } from "react";
import Room from "../components/room";

class Hss extends Component {
  render() {
    return (
      <>
        <Room
          name="HSS 105"
          phone="Remote"
          address="500 W 14th St"
          logbook="https://docs.google.com/spreadsheets/d/1bOsoJUZp2D4IesyGaA6odWuahK9XgNkwPXhAf8lndhQ/edit"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=266942708&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>
      </>
    );
  }
}

export default Hss;
