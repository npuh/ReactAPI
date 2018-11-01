import React from "react";

const StationList = props => {
  return (
    <div className="stationList">
      <li>{props.children}</li>
    </div>
  );
};
export default StationList;
