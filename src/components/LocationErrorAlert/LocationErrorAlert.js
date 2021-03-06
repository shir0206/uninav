import React, { useState } from "react";
import "./LocationErrorAlert.css";
import getLocaleString from "../../locale/locale";
import LocateSVG from "../../icons/LocateSVG.js";

export const LocationErrorAlert = (props) => {
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
              {getLocaleString("LOCATION_ERROR_TITLE")}
            </h2>
          </div>

          <p className="location-error-text"> {props.error}</p>
          <button
            className="loccation-error-button"
            onClick={handleLocationError}
          >
            {getLocaleString("OK")}
          </button>
        </div>
      ) : null}
    </>
  );
};
