import React, { Component } from "react";

class Bag extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="ShopGrid">
        <div className="ShoppingBag">
          <div>
            <h3
              style={{
                paddingLeft: "25px",
                paddingTop: "25px",
                color: "#29303E",
              }}
            >
              SHOPPING BAG
            </h3>
            <hr
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                borderStyle: "solid",
                borderColor: "whitesmoke",
              }}
            ></hr>
            <div className="BagContain">
              <div className="item" style={{ marginTop: "20px" }}>
                <p
                  style={{
                    paddingLeft: "20px",
                    paddingTop: "10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  Items(s)
                </p>
              </div>
              <div className="Itemno">
                <div className="Image">
                  <img
                    src="https://static.zara.net/photos///2020/V/0/2/p/7545/424/401/2/w/385/7545424401_2_1_1.jpg?ts=1580405364792"
                    height="180px"
                    width="130px"
                    style={{ boxShadow: " 0px 2px 16px 0px rgba(0,0,0,0.2)" }}
                    alt="ss"
                  ></img>
                  <div style={{ marginLeft: "40px" }}>
                    <div
                      style={{
                        fontFamily: "Raleway",
                        fontSize: "18px",
                        fontWeight: "bolder",
                      }}
                    >
                      20.00 EUR
                    </div>
                    <div
                      style={{
                        fontFamily: "Roboto",
                        fontWeight: "Bolder",
                        fontSize: "14px",
                      }}
                    >
                      {" "}
                      Fannel Printed Shirt
                    </div>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  marginLeft: "15px",
                  marginRight: "15px",
                  borderStyle: "solid",
                  borderColor: "whitesmoke",
                }}
              ></hr>
            </div>
          </div>
        </div>
        <div className="Payment"></div>
      </div>
    );
  }
}

export default Bag;
