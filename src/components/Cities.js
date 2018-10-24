// import React, { Component } from "react";

// class Cities extends Component {
//   state = {
//     city: [
//       {
//         stationName: undefined,
//         stationShortCode: undefined
//       }
//     ]
//   };
//   getCities = async e => {
//     e.preventDefault();
//     const api_call2 = await fetch(
//       `https://rata.digitraffic.fi/api/v1/metadata/stations`
//     );
//     const cityData = await api_call2.json();

//     console.log("Call works!");
//     this.setState({
//       city: cityData,
//       stationName: cityData[0].stationName,
//       stationShortCode: cityData[0].stationShortCode
//     });
//     console.log("Works!");
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.getCities}>
//           <input type="text" name="cityName" />
//           <button className="searchButton">Get City Codes</button>
//         </form>
//         <ul className="citiesList">
//           <li>Station name: {this.state.stationName}</li>
//           <li>ShortCode: {this.state.stationShortCode}</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Cities;
