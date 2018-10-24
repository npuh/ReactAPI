import React from "react";

const Form = props => (
  <div>
    <form className="trainForm" onSubmit={props.getTrains}>
      <input type="text" name="depCity" placeholder="Departure City" />
      <input type="text" name="arrCity" placeholder="Arrival City" />
      <button className="searchButton">Search</button>
    </form>
  </div>
);

export default Form;
