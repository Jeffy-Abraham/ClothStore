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
      
      <div>



             <div className="MainContainer">
        <div className="HamburgerMenu">
          <div className="SubHamburger">
            <div className="Hamburger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>

            <div className="Title2">ARARA</div>
          </div>
          <div className="Cart2"> 
           <Cart
           
            clothCart={this.props.clothCart}
            RemoveFromCart={this.props.RemoveFromCart}
          /></div>
        
          </div>
     
        
      
        </div>

        <header >
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
            <Cart
            className="Cart"
            clothCart={this.props.clothCart}
            RemoveFromCart={this.props.RemoveFromCart}
          />
          </nav>
        
        </header>
      </div>
    );
  }
}

export default Topnav;
