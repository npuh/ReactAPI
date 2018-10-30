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
            <address>
              Just some text here. <br />
              So tralalalalalalaa, TGIF!
            </address>
          </div>
          <div className="column">
            <address>
              Phone number: 0505050505
              <br />
              email: <a href="mailto:myemail@email.com">My email</a>
            </address>
          </div>
          <div className="column">
            <address>
              Please, come to MyStreet str1
              <br />
              00110 Helsinki.
            </address>
          </div>
          <div className="column">
            <address>
              Fourth column,
              <br />
              special information.
            </address>
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
