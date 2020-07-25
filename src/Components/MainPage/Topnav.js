import React, { Component } from "react";
import Title from "./Title";
import "./Css/HomePage.css";
import Cart from "./Cart";
import { Link } from "react-router-dom";

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="MainContainer">
        <header>
          <nav>
            <ul>
              <li style={{ marginTop: "-20px" }}>
                <Link to="/">
                  <Title />
                </Link>
              </li>
              <li>
                <Link to="/Men">MEN</Link>
              </li>
              <li>
                <Link to="/Women">WOMEN</Link>
              </li>
            
             
            </ul>
          </nav>
          <Cart
            className="Cart"
            clothCart={this.props.clothCart}
            RemoveFromCart={this.props.RemoveFromCart}
          />
        </header>
      </div>
    );
  }
}

export default Topnav;
