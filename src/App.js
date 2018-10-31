import React, { Component } from "react";
import TrainList from "./components/Trainlist";
import Form from "./components/Form";
import Columns from "./components/Columns";
import "./App.css";

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
      `https://rata.digitraffic.fi/api/v1/live-trains/station/${depCity}/${arrCity}?departure_date=${depDate}&limit=6`
    );

    const data = await api_call.json();

    this.setState({
      traindata: data
    });
    console.log(data);
  };

  //Returns traindata.
  gettingTrains() {
    return this.state.traindata;
  }

  //Deletes a selected train from the list.
  deleteTrain = (index, e) => {
    const traindata = Object.assign([], this.state.traindata);
    traindata.splice(index, 1);
    this.setState({
      traindata: traindata
    });
  };

  //Selects one train from the list and shows the information at the bottom of the page.
  selectTrain = (trainNumber, departureDate, e) => {
    e.preventDefault();
    let list = document.getElementById("list");
    if (list.style.display === "none") list.style.display = "inline-block";
    else list.style.display = "inline-block";

    const index = this.state.traindata.findIndex(traindata => {
      return (
        traindata.trainNumber === trainNumber,
        traindata.departureDate === departureDate
      );
    });

    document.getElementById("list").innerHTML =
      "Train number: " + trainNumber + ", departure date: " + departureDate;

    console.log("train number: " + trainNumber);
  };

  //Clears the page
  clearAll = e => {
    e.preventDefault();
    let list = document.getElementById("list");
    if (list.style.display === "block") list.style.display = "none";
    console.log("Cleared!!");
    document.getElementById("trainForm").reset();
    let divData = this.state.traindata;
    console.log(this.gettingTrains());
    divData.splice(0);
    this.setState({
      traindata: divData
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h6>Train form made just for fun!</h6>
        </header>
        <h1 className="h1Trains">Trrraaaaiiinss!</h1>
        <button className="clearButton" onClick={this.clearAll}>
          Clear All
        </button>
        <Form getTrains={this.getTrains} />
        <div hidden className="list" id="list" />
        <ul>
          {this.state.traindata.map((train, index) => {
            return (
              <TrainList
                key={train.trainNumber}
                delEvent={this.deleteTrain.bind(this, index)}
                selectEvent={this.selectTrain.bind(
                  this,
                  train.trainNumber,
                  train.departureDate
                )}
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

export default App;
