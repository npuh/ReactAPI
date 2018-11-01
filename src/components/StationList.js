import React from "react";

const StationList = props => {
  return (
    <div className="div">
      <li className="stationList">{props.children}</li>
    </div>
  );
};
export default StationList;
