import React, { useState } from "react";
import "./LocationError.css";
import getString from "../../strings/strings";
import LocateSVG from "../../icons/LocateSVG.js";

export const LocationError = (props) => {
  const [isDisplayErrorPopup, setIsDisplayErrorPopup] = useState(true);

  const handleLocationError = () => {
    console.log("handleLocationError");
    setIsDisplayErrorPopup(false);
  };

  return (
    <>
      {isDisplayErrorPopup ? (
        <div className="loccation-error-cont">
          <div className="location-error-heading">
            <LocateSVG isActive={true}></LocateSVG>

            <hr className="location-error-hr"></hr>
            <h2 className="location-error-heading-title">
              {getString("LOCATION_ERROR_TITLE")}
            </h2>
          </div>

          <p className="location-error-text"> {props.error}</p>
          <button
            className="loccation-error-button"
            onClick={handleLocationError}
          >
            {getString("OK")}
          </button>
        </div>
      ) : null}
    </>
  );
};
