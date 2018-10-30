import React, { Component } from "react";
import TrainList from "./components/Trainlist";
import Form from "./components/Form";
import Columns from "./components/Columns";
import "./App.css";

class App2 extends Component {
  state = {
    traindata: []
  };
  getTrains = async e => {
    const depCity = e.target.elements.depCity.value;
    const arrCity = e.target.elements.arrCity.value;
    const depDate = e.target.elements.depDate.value;

    e.preventDefault();
    const api_call = await fetch(
      `https://rata.digitraffic.fi/api/v1/live-trains/station/${depCity}/${arrCity}?departure_date=${depDate}&limit=6`
    );

    const data = await api_call.json();

    this.setState({
      traindata: data
    });
    console.log(data);
  };
  deleteTrain = (index, e) => {
    const traindata = Object.assign([], this.state.traindata);
    traindata.splice(index, 1);
    this.setState({
      traindata: traindata
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h6>Train form made just for fun!</h6>
        </header>
        <h1 className="h1Trains">Trrraaaaiiinss!</h1>
        <Form getTrains={this.getTrains} />
        <ul>
          {this.state.traindata.map((train, index) => {
            return (
              <TrainList
                key={train.trainNumber}
                delEvent={this.deleteTrain.bind(this, index)}
              >
                {train.trainNumber}, Departure date: {train.departureDate},
                Scheduled departure time: {train.timeTableRows[0].scheduledTime}
              </TrainList>
            );
          })}
        </ul>
        <Columns />
        <footer>
          This train information is brought to you by digitraffic. And me. :D
        </footer>
      </div>
    );
  }
}

export default App2;
