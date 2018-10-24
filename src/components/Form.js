import React from "react";

const Form = props => (
  <div>
    <form className="trainForm" onSubmit={props.getTrains}>
      <input type="text" name="depCity" placeholder="Departure City Code" />
      <br />
      <input type="text" name="arrCity" placeholder="Arrival City Code" />
      <br />
      <input type="text" name="depDate" placeholder="vvvv/mm/dd" />
      <br />
      <button className="searchButton">Search</button>
    </form>
  </div>
);

export default Form;
