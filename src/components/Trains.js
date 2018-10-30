// import React, { Component } from "react";
// import Form from "./Form";

// class Trains extends Component {
//   state = {
//     traindata: []
//   };

//   getTrains = async e => {
//     const depCity = e.target.elements.depCity.value;
//     const arrCity = e.target.elements.arrCity.value;
//     const depDate = e.target.elements.depDate.value;

//     e.preventDefault();
//     const api_call = await fetch(
//       `https://rata.digitraffic.fi/api/v1/live-trains/station/${depCity}/${arrCity}?departure_date=${depDate}&limit=6`
//     );

//     const data = await api_call.json();

//     this.setState({
//       traindata: data
//     });
//   };

//   gettingTrains() {
//     return this.state.traindata;
//   }

//   clearAll = e => {
//     e.preventDefault();
//     console.log("Cleared!!");
//     document.getElementById("trainForm").reset();
//     let divData = this.state.traindata;
//     console.log(this.gettingTrains());
//     divData.splice(0);
//     this.setState({
//       traindata: divData
//     });
//   };

//   find = e => {
//     e.preventDefault();
//     const data = this.gettingTrains();
//     const thing = e.target.trainNumber;
//     console.log(thing);
//   };
//   // hide(event) {
//   //   let divHidden = document.getElementById("trainDiv");
//   //   divHidden.style.display = "none";
//   // }

//   render() {
//     const trainNumber = this.state;
//     let nr = 0;

//     return (
//       <div>
//         <h1 className="h1Trains">Trrraaaaiiinss!</h1>
//         <button className="clearButton" onClick={this.clearAll}>
//           Clear All
//         </button>
//         <Form getTrains={this.getTrains} />
//         {this.state.traindata.map(train => {
//           return (
//             <div
//               tag={train.trainNumber}
//               key={train.trainNumber}
//               className="trainDiv"
//               id="trainDiv"
//               value={trainNumber}
//             >
//               <p>Option {(nr += 1)} </p>
//               {/* <p>Option number: {(this.state.nr += 1)}</p> */}
//               <p name="myTrains">Train number: {train.trainNumber}</p>
//               <p>
//                 Departure date:
//                 {train.departureDate}
//               </p>
//               <p>
//                 Scheduled departure time: {train.timeTableRows[0].scheduledTime}
//               </p>
//               <button onClick={trainNumber => this.find(trainNumber)}>
//                 Select
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default Trains;
