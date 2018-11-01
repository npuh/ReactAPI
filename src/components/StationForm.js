import React from "react";

// onSubmit={props.getStations}
const StationForm = props => (
  <div>
    <h3>Find City Codes Here!</h3>
    <form className="trainForm" id="trainForm">
      {/* <input
        type="text"
        name="stationName"
        // required
        placeholder="Station name"
      /> */}
      <button className="basicButton" onClick={props.getStations}>
        Get stations
      </button>
    </form>
  </div>
);

export default StationForm;
