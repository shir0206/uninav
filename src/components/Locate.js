import React from "react";
import "./locate.css";
import locateIcon from "../icons/locate.svg";
import getAlert from "../alerts/alerts";

export const Locate = (props) => {
  return (
    <button
      className="locate"
      onClick={() => {
        props.setLocate(true);
        props.setIsDragged(false);
        props.setIsWatchForLocation(true);
        getAlert("startLocationWatch");
        console.log("Locate", "false");
      }}
    >
      <img src={locateIcon} alt="compass-locate me"></img>
    </button>
  );
};
