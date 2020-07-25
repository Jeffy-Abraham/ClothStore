import React from "react";
import "./Css/DisplayPage.css";

function ModelPic(props) {
  return (
    <div className="ModelImage">
      <img src={props.ModelPic}  />
    </div>
  );
}

export default ModelPic;
