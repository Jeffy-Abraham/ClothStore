import React, { Component } from "react";

import "./Css/ShoppingPage.css";
import ClickButton from "../MinorComponents/Button";

class ShoppingPage extends Component {
  render() {
    var id = this.props.match.params.id;

    const { clothTypes } = this.props;

    const cloth = clothTypes.find((cloth) => cloth.id == id);

    return (
      <div className="CenterShoppingPage">
        <div className="ShoppingContainer">
          <div className="ShoppingImage">
            <img src={cloth.ImageLink} width="400" height="600" />
          </div>

          <div className="ShoppingBuy">
            <div className="ShoppingDescription">
              <h1
                style={{
                  fontFamily: "Tahoma",
                  fontWeight: "500",
                  marginTop: "80px",
                  fontSize: "20px",
                  letterSpacing: "0.2rem",
                }}
              >
                {cloth.Title}
              </h1>
              <p
                style={{
                  width: "540px",
                  fontSize: "14px",
                  fontFamily: "Raleway",
                  maxWidth: "300px",
                }}
              >
                {cloth.Description}{" "}
              </p>
              <p style={{ fontSize: "20px" }}>{cloth.Price}</p>

              <p
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.1rem",
                  display: "inline",
                }}
              >
                COLOR :
              </p>
              <div
                style={{
                  width: "23px",
                  height: "23px",
                  backgroundColor: "lightblue",
                  borderRadius: "20px",
                }}
              ></div>

              <select
                style={{ width: "300px", height: "40px", marginTop: "30px" }}
                name="Size"
              >
                <option value="1">S</option>
                <option value="2">M</option>
                <option value="3">L</option>
                <option value="4">XL</option>
              </select>
            </div>
            <div className="BuyButton">
              <ClickButton AddToCart={this.props.AddToCart} addedItem={cloth} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingPage;
