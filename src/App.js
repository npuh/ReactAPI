import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  state = {
    traindata: []
  };
  getTrains = async e => {
    const depCity = e.target.elements.depCity.value;
    const arrCity = e.target.elements.arrCity.value;
    const depDate = e.target.elements.depDate.value;

    e.preventDefault();
    const api_call = await fetch(
      `https://rata.digitraffic.fi/api/v1/live-trains/station/${depCity}/${arrCity}?departure_date=${depDate}&limit=10`
    );

    const data = await api_call.json();

    this.setState({
      traindata: data
    });
    console.log(this.state.traindata);
  };
  clearAll = e => {
    e.preventDefault();
    console.log("Cleared!!");
    document.getElementById("trainForm").reset();
    let divData = this.state.traindata;
    divData.splice(0);
    this.setState({
      traindata: divData
    });
  };

  render() {
    let nr = 0;
    return (
      <div className="App">
        <header className="App-header">
          <h6>TrainFormForYou</h6>
        </header>
        <h1 className="h1Trains">Trrraaaaiiinss!</h1>
        <button className="clearButton" onClick={this.clearAll}>
          Clear All
        </button>
        <Form getTrains={this.getTrains} />
        {this.state.traindata.map(train => {
          return (
            <div key={train.trainNumber} className="trainDiv" id="trainDiv">
              <p>Option {(nr += 1)} </p>
              <p>
                Train number: {train.trainNumber}, Departure date:
                {train.departureDate}
              </p>
              <p>
                Scheduled departure time: {train.timeTableRows[0].scheduledTime}
              </p>
              <button>Select</button>
            </div>
          );
        })}
        <div>
          <br />
        </div>
        <div>
          <br />
        </div>
        <footer>
          This train information is brought to you by digitraffic.
        </footer>
      </div>
    );
  }
}

export default App;
