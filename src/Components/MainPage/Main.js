import React, { Component } from "react";

import "./Css/HomePage.css";
import { Spring } from "react-spring/renderprops";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="cent">
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {(props) => (
              <div style={props}>
                {" "}
                <img
                  src="https://static.topman.com/v1/static/json-0000157629_tm-wk47-thu-desk-mod-1-eujpg"
                  alt="bg"
                
                  style={{ marginTop: "30px",width:'100%' }}
                />
              </div>
            )}
          </Spring>
        </div>
        <div className="ShopButtons"></div>
      </div>
    );
  }
}

export default Main;
