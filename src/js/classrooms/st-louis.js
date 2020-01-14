import React, { Component } from "react";
import Room from "../components/room";

class StLouis extends Component {
  render() {
    return (
      <>
        <Room
          name="STL 210"
          phone="573.341.6152"
          address="12837 Flushing Meadows Dr"
          logbook="https://docs.google.com/spreadsheets/d/1GENT4swxdExhz3c2drY2Zrx6nKJYRQwLDUUEOLHC_YI/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=646532313&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>

        <Room
          name="STL 211"
          phone="573.341.6148"
          address="12837 Flushing Meadows Dr"
          logbook="https://docs.google.com/spreadsheets/d/1rsPzlboZkIN7wl7gIKzBkxL9_fl5-a3zhWHt2hPH-qs/edit"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=1778121514&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>

        <Room
          name="STL 212"
          phone="573.341.6145"
          address="12837 Flushing Meadows Dr"
          logbook="https://docs.google.com/spreadsheets/d/1kh-Yv8IdAtIYaI3FibwwEc_EiBqkvMfORAtXnwxNKNQ/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=577442612&amp;single=true&amp;widget=true&amp;headers=false"
        ></Room>
      </>
    );
  }
}

export default StLouis;
