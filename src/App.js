import React, { Component } from "react";
import TrainList from "./components/Trainlist";
import Form from "./components/Form";
import Columns from "./components/Columns";
import "./App.css";
import Stations from "./components/Stations";
import junaedestäpieni from "./contents/images/junaedestäpieni.jpg";
import junalaituripieni from "./contents/images/junalaituripieni.jpg";
import trainjunametsä from "./contents/images/trainjunametsä.jpg";
import viitat from "./contents/images/viitat.jpg";

class App extends Component {
  state = {
    traindata: []
  };

  //Gets the train data from digitraffic.fi 6 first trains.
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
  };

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
      "WOOHOO! You successfully selected train number: " +
      trainNumber +
      ", departure date: " +
      departureDate;
    console.log("train number: " + trainNumber);
  };

  //Clears the page
  clearAll = e => {
    e.preventDefault();
    let list = document.getElementById("list");
    if (list.style.display === "inline-block") list.style.display = "none";
    console.log("Cleared!!");
    document.getElementById("trainForm").reset();
    let divData = this.state.traindata;
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
        <section>
          <nav>
            <span>
              <Stations />
              <div className="row">
                <img src={viitat} alt="signs" className="img2" />
              </div>
            </span>
          </nav>
          <article>
            <Form getTrains={this.getTrains} clearAll={this.clearAll} />
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
                    {train.trainNumber} <br />
                    Departure date: {train.departureDate}
                    <br />
                    Scheduled departure time:
                    {train.timeTableRows[0].scheduledTime}
                  </TrainList>
                );
              })}
            </ul>
            <div className="row">
              <div>{""}</div>
              <p className="pfooter">
                Look at all these beautiful train related pictures below.{" "}
              </p>
              <div className="column">
                <img src={junaedestäpieni} alt="train1" className="img" />
              </div>
              <div className="column">
                <img src={junalaituripieni} alt="train2" className="img" />
              </div>
              <div className="column">
                <img src={trainjunametsä} alt="train3" className="img" />
              </div>
            </div>
          </article>
        </section>
        <Columns />
        <footer>
          This train information is brought to you by digitraffic. And me. :D
        </footer>
      </div>
    );
  }
}

export default App;
