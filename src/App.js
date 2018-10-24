import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Cities from "./components/Cities";
import Trains from "./components/Trains";

class App extends Component {
  state = {
    departureCity: undefined,
    arrivalCity: undefined,
    scheduledTime: undefined,
    trainNumber: undefined,
    departureDate: undefined,
    trainType: undefined,
    trainCategory: undefined
  };
  getTrains = async e => {
    // const name = e.target.elements.name.value;
    const depCity = e.target.elements.depCity.value;
    const arrCity = e.target.elements.arrCity.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://rata.digitraffic.fi/api/v1/live-trains/station/${depCity}/${arrCity}`
    );
    // const api_call = await fetch("https://rata.digitraffic.fi/api/v1/trains/");
    //live-trains/station/<departure_station_code>/<arrival_station_code>?departure_date=<departure_date>&startDate=<startDate>&endDate=<endDate>&limit=<limit></limit>

    const data = await api_call.json();

    this.setState({
      departureCity: data[0].timeTableRows[0].stationShortCode,
      trainNumber: data[0].trainNumber,
      scheduledTime: data[0].timeTableRows[0].scheduledTime,
      departureDate: data[0].departureDate,
      trainType: data[0].trainType,
      trainCategory: data[0].trainCategory
    });
    console.log(this.state.data);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>JunaFormi!</h1>
        </header>
        <Form getTrains={this.getTrains} />
        <Trains
          trainNumber={this.state.trainNumber}
          departureDate={this.state.departureDate}
          scheduledTime={this.state.scheduledTime}
          trainType={this.state.trainType}
          trainCategory={this.state.trainCategory}
        />
        <Cities />
      </div>
    );
  }
}

export default App;
