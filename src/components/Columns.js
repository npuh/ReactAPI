import React, { Component } from "react";

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
      </div>
    );
  }
}

export default Columns;
