import React from "react";

function ModelPicTitle(props) {
  return (
    <div>
      <h1
        className="animate"
        style={{
          fontFamily: "Raleway",
          fontWeight: "600",
          marginTop: "100px",
          fontSize: "45px",
          letterSpacing: "0.1rem",
          borderBottom: "solid",
          width: "90%",
        }}
      >
        {props.title}
      </h1>
      <h1
        style={{
          fontFamily: "Raleway",
          fontWeight: "500",
          marginTop: "80px",
          fontSize: "34px",
        }}
      >
        NEW SPRING COLLECTION
      </h1>
      <p style={{ fontSize: "16px", fontWeight: "lighter" }}>
        The new designer spring collection is here.Check out here for new and
        exciting offers.Floral loose fitting tshirts for all kinds of men
      </p>
    </div>
  );
}

export default ModelPicTitle;
