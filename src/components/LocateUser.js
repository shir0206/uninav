import React from "react";
import "./locateUser.css";
import getAlert from "../alerts/alerts";
import LocateSVG from "../icons/LocateSVG.js";

export const LocateUser = (props) => {
  const isActive = !props.isLocationError;

  return (
    <button
      className="locate-btn"
      onClick={() => {
        if (isActive) {
          props.setIsLocateUser(true);
          props.setIsCenterUserLocation(true);
        }
      }}
    >
      <LocateSVG isActive={isActive}></LocateSVG>
    </button>
  );
};