import React from "react";

const StationForm = props => (
  <div>
    <h3>Find City Codes Here!</h3>
    <form className="trainForm" id="trainForm">
      <button onClick={props.getStations}>Get stations</button>
    </form>
  </div>
);

export default StationForm;
