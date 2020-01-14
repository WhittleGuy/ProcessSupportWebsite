import React, { Component } from "react";
import Room from "../components/room";

class Ece extends Component {
  render() {
    return (
      <>
        <Room
          name="ECE G31"
          phone="Remote"
          address="301 W 16th St"
          logbook="https://docs.google.com/spreadsheets/d/1OceHyY6ZTe654PoL1XZpVnEwx1ljCXG4ZAau6cG5Xz4/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=719670707&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>

        <Room
          name="ECE 103"
          phone="573.341.7090"
          address="301 W 16th St"
          logbook="https://docs.google.com/spreadsheets/d/1OceHyY6ZTe654PoL1XZpVnEwx1ljCXG4ZAau6cG5Xz4/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=4790009&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>

        <Room
          name="ECE 239"
          phone="Remote"
          address="301 W 16th St"
          logbook="https://docs.google.com/spreadsheets/d/1K2w_GnT3uMfqDmzOkp_vYkkKXZRPV7VaZZ-Kx0cjRc8/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=676764721&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>
      </>
    );
  }
}

export default Ece;
