import React, { Component } from "react";
import StationForm from "./StationForm";
import StationList from "./StationList";

const url = "https://rata.digitraffic.fi/api/v1/metadata/stations";
class Cities extends Component {
  state = {
    stations: []
  };

  getStations = async e => {
    e.preventDefault();
    const api_call = await fetch(url);
    const data = await api_call.json();
    let row = document.getElementById("row");

    row.style.display = "block";
    this.setState({
      stations: data
    });
  };

  render() {
    return (
      <div>
        <StationForm getStations={this.getStations} />
        <span className="row" id="row" hidden onMouseDown={this.onMouseDown}>
          {this.state.stations.map(station => {
            return (
              <StationList key={station.stationShortCode}>
                <p>
                  Station name: <b>{station.stationName}</b> | station short
                  code: {""}
                  <b>{station.stationShortCode}</b>
                </p>
              </StationList>
            );
          })}
        </span>
      </div>
    );
  }
}

export default Cities;
