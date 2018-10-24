import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Cities from "./components/Cities";
import Trains from "./components/Trains";

class App extends Component {
  state = {
    traindata: [
      {
        departureCity: undefined,
        arrivalCity: undefined,
        scheduledTime: undefined,
        trainNumber: undefined,
        departureDate: undefined,
        trainType: undefined,
        trainCategory: undefined
      }
    ]
  };
  getTrains = async e => {
    // const name = e.target.elements.name.value;
    const depCity = e.target.elements.depCity.value;
    const arrCity = e.target.elements.arrCity.value;
    const depDate = e.target.elements.depDate.value;

    e.preventDefault();
    const api_call = await fetch(
      `https://rata.digitraffic.fi/api/v1/live-trains/station/${depCity}/${arrCity}?departure_date=${depDate}&limit=10`
    );
    // const api_call = await fetch("https://rata.digitraffic.fi/api/v1/trains/");
    //live-trains/station/<departure_station_code>/<arrival_station_code>?departure_date=<departure_date>&startDate=<startDate>&endDate=<endDate>&limit=<limit></limit>

    const data = await api_call.json();

    this.setState({
      traindata: data,
      trainNumber: data[0].trainNumber,
      scheduledTime: data[0].timeTableRows[0].scheduledTime,
      departureDate: data[0].departureDate,
      trainType: data[0].trainType,
      trainCategory: data[0].trainCategory
    });
    console.log(this.state.traindata);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>JunaFormi!</h1>
        </header>
        <Form getTrains={this.getTrains} />
        {this.state.traindata.map(train => {
          return (
            <div key={train.train_id}>
              <p>Scheduled Time: {train.scheduledTime}</p>
              <p>Train number: {train.trainNumber}</p>
              <p>Departure Date: {train.departureDate}</p>
              <p>Train Type: {train.trainType}</p>
              <p>Train Category: {train.trainCategory}</p>
            </div>
          );
        })}
        <Cities />
      </div>
    );
  }
}

export default App;
