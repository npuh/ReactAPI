import React from "react";

const Form = props => (
  <div>
    <h3>Get your train information here!</h3>
    <form className="trainForm" id="trainForm" onSubmit={props.getTrains}>
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
        placeholder="Destination City Code"
      />
      <br />
      <input type="text" name="depDate" required placeholder="VVVV-MM-DD" />
      <br />
      <button className="searchButton">Search</button>
      <button className="clearButton" onClick={props.clearAll}>
        Clear All
      </button>
    </form>
  </div>
);

export default Form;
