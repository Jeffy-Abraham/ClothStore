import React, { Component } from "react";
import "../MainPage/Css/HomePage.css";
import "./Css/DisplayPage.css";
import DisplayGrid from "./DisplayGrid";
import SortbyPrice from "./SortbyPrice";
import ModelPic from "./ModelPic";
import ModelPicTitle from "./ModelPicTitle";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

class DisplayPage extends Component {
  render() {
    const { clothTypes } = this.props;

    return (
      <div>
        <div className="DisplayContainer">
          <div className="ModelPic">
            <ModelPic ModelPic={this.props.ModelPicGuy} />
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {(props) => (
              <div style={props}>
                <ModelPicTitle title={this.props.ModelTitle} />
              </div>
            )}
          </Spring>
           
          </div>

          <div className="Filter" style={{ width: "100%", height: "40px"}}>
            <SortbyPrice
              title={"FILTER"}
              filterClothesbyPrice={this.props.filterClothesbyPrice}
            />
          
          </div>
          <section className="Products">
            {clothTypes.map((cloths) => {
              return (
                <Link
                  to={`AddtoBag/${this.props.Gender}/${cloths.id}`}
                  style={{ color: "black" }}
                >
                  <DisplayGrid displaypic={cloths} />
                </Link>
              );
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default DisplayPage;
