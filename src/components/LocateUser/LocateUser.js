import React from "react";
import "./LocateUser.css";

import LocateSVG from "../../icons/LocateSVG.js";

/**
 * A button that aims to find the user location and center the map according to its location.
 * If there is an error receiving information about the user's location, the button is set to Inactive.
 */
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
