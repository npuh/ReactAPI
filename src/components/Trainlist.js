import React from "react";

const Trainlist = props => {
  return (
    <div className="trainDiv">
      <p>TrainNumber: {props.children}</p>
      <button onClick={props.delEvent}>Delete</button>
      <button onClick={props.selectEvent}>Select</button>
    </div>
  );
};
export default Trainlist;
