import React, { Component } from "react";
import Room from "../components/room";

class Cent extends Component {
  render() {
    return (
      <>
        <Room
          name="CH 105"
          phone="Remote"
          address="300 W 12th St"
          logbook="https://docs.google.com/spreadsheets/d/1OceHyY6ZTe654PoL1XZpVnEwx1ljCXG4ZAau6cG5Xz4/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=1877700745&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>
      </>
    );
  }
}

export default Cent;
