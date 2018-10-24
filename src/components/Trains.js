import React from "react";

const Trains = props => (
  <div>
    <p>Train number: {props.trainNumber}</p>
    <p>Departure Date: {props.departureDate}</p>
    <p>Scheduled Time: {props.scheduledTime}</p>
    <p>Train Type: {props.trainType}</p>
    <p>Train Category: {props.trainCategory}</p>
  </div>
);

export default Trains;
