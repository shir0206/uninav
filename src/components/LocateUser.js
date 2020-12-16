import React from "react";
import "./locateUser.css";
import locateIcon from "../icons/locate.svg";
import getAlert from "../alerts/alerts";

export const LocateUser = (props) => {
  return (
    <button
      className="locate"
      onClick={() => {
        props.setIsLocateUser(true);
        getAlert("startLocationWatch");
      }}
    >
      <img src={locateIcon} alt="compass-locate me"></img>
    </button>
  );
};
