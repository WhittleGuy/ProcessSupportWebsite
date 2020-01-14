import React, { Component } from "react";
import Room from "../components/room";

class Fulton extends Component {
  render() {
    return (
      <>
        <Room
          name="FUL 107"
          phone="573.341.4975"
          address="301 W 14th St"
          logbook="https://docs.google.com/spreadsheets/d/12OK1V2v6dD9WjEz1mq0wEnaipA-1Q-DzNRQqc3huDu0/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=371441586&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>
      </>
    );
  }
}

export default Fulton;
