import React, { useState } from "react";
import "./locationError.css";
import getString from "../strings/strings";

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
          <h6 className="location-error-text"> {props.error}</h6>
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
