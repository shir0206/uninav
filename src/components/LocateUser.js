import React from "react";
import "./locateUser.css";
import getAlert from "../alerts/alerts";
import LocateSVG from "../icons/LocateSVG.js";

export const LocateUser = (props) => {
  return (
    <button
      className="locate"
      onClick={() => {
        props.setIsLocateUser(true);
        getAlert("startLocationWatch");
      }}
    >
      <LocateSVG></LocateSVG>
    </button>
  );
};
