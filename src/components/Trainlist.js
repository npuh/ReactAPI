import React from "react";
import "../App.css";

const Trainlist = props => {
  return (
    <div className="trainDiv">
      <div id="activate-div">
        <p>TrainNumber: {props.children}</p>
        <button className="basicButton" onClick={props.delEvent}>
          Delete
        </button>
        <button className="basicButton" onClick={props.selectEvent}>
          Select
        </button>
      </div>
    </div>
  );
};
export default Trainlist;
