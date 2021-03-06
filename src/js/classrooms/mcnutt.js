import React, { Component } from "react";
import Room from "../components/room";

class McNutt extends Component {
  render() {
    return (
      <>
        <Room
          name="MCN 216"
          phone="Remote"
          address="1400 North Bishop"
          logbook="https://docs.google.com/spreadsheets/d/1OceHyY6ZTe654PoL1XZpVnEwx1ljCXG4ZAau6cG5Xz4/edit"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=983302159&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>
        <Room
          name="MCN 265"
          phone="Remote"
          address="1400 North Bishop"
          logbook="https://docs.google.com/spreadsheets/d/1OceHyY6ZTe654PoL1XZpVnEwx1ljCXG4ZAau6cG5Xz4/edit"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=252622591&single=true&amp;widget=true&amp;headers=false"
        ></Room>
      </>
    );
  }
}

export default McNutt;
