import React from "react";
import "../App.css";

const Trainlist = props => {
  return (
    <div className="trainDiv" id="trainDiv">
      <p>TrainNumber: {props.children}</p>
      <button onClick={props.delEvent}>Delete</button>
      <button onClick={props.selectEvent}>Select</button>
    </div>
  );
};
export default Trainlist;
