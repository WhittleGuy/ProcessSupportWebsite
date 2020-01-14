import React, { Component } from "react";

import Room from "../components/room";

class Bert extends Component {
  render() {
    return (
      <>
        <Room
          image=""
          name="BRT B12A"
          phone="573.341.4601"
          address="1100 N State St"
          logbook="https://docs.google.com/spreadsheets/d/1YTdJ7x5oof-RIo8Wjmx__hBCV5GE3izyaY9f6Tjd7lM/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=1272452642&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>

        <Room
          name="BRT B12B"
          phone="573.341.4601"
          address="1100 N State St"
          logbook="https://docs.google.com/spreadsheets/d/1SNddfPnDpbFXl_3iDHeL9-kzDKIpA5ILSkMfIgyNR60/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=2041886434&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>
      </>
    );
  }
}

export default Bert;
