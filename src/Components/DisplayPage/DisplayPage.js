import React, { Component } from "react";
import "../MainPage/Css/HomePage.css";
import "./Css/DisplayPage.css";
import DisplayGrid from "./DisplayGrid";
import SortbyPrice from "./SortbyPrice";
import ModelPic from "./ModelPic";
import ModelPicTitle from "./ModelPicTitle";
import { Link } from "react-router-dom";

class DisplayPage extends Component {
  render() {
    const { clothTypes } = this.props;

    return (
      <div>
        <div className="DisplayContainer">
          <div className="ModelPic">
            <ModelPic ModelPic={this.props.ModelPicGuy} />

            <ModelPicTitle title={this.props.ModelTitle} />
          </div>

          <div className="Filter" style={{ width: "50%", height: "40px" }}>
            <SortbyPrice
              title={"SORT BY PRICE"}
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
