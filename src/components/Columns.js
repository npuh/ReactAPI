import React, { Component } from "react";
import junaedestäpieni from "../contents/images/junaedestäpieni.jpg";
import junalaituripieni from "../contents/images/junalaituripieni.jpg";
import trainjunametsä from "../contents/images/trainjunametsä.jpg";
class Columns extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <p>Just some text here. So tralalalalalalaa, TGIF!</p>
          </div>
          <div className="column">
            <p>Phone number: 0505050505 email: myemail@email.com</p>
          </div>
          <div className="column">
            <p>Please, come to MyStreet str1, 00110 Helsinki.</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img src={junaedestäpieni} alt="train1" />
          </div>
          <div className="column">
            <img src={junalaituripieni} alt="train2" />
          </div>
          <div className="column">
            <img src={trainjunametsä} alt="train3" />
          </div>
        </div>
      </div>
    );
  }
}

export default Columns;
