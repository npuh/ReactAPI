import React from "react";

const Form = props => (
  <div>
    <h3>Get your train information here!</h3>
    <form className="trainForm" onSubmit={props.getTrains}>
      <input
        type="text"
        name="depCity"
        required
        placeholder="Departure City Code"
      />
      <br />
      <input
        type="text"
        name="arrCity"
        required
        placeholder="Arrival City Code"
      />
      <br />
      <input type="text" name="depDate" required placeholder="vvvv/mm/dd" />
      <br />
      <button className="searchButton">Search</button>
    </form>
  </div>
);

export default Form;
