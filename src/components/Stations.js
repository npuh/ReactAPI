import React, { Component } from "react";
import StationForm from "./StationForm";
import StationList from "./StationList";

const url = "https://rata.digitraffic.fi/api/v1/metadata/stations";
class Stations extends Component {
  state = {
    stations: []
  };

  //Gets station names and station short codes. Also hides the list when clicked again.
  getStations = async e => {
    e.preventDefault();

    let hiddenDiv = document.getElementById("hidden");
    if (hiddenDiv.style.display === "block") {
      hiddenDiv.style.display = "none";
    } else hiddenDiv.style.display = "block";

    const api_call = await fetch(url);
    const data = await api_call.json();

    this.setState({
      stations: data
    });
  };

  render() {
    return (
      <div>
        <StationForm getStations={this.getStations} />
        <span hidden className="hidden" id="hidden">
          {this.state.stations.map(station => {
            return (
              <StationList key={station.stationShortCode}>
                <p>
                  Station name: <b>{station.stationName}</b>, station short
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

export default Stations;
