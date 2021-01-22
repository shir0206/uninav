import React from "react";
import "./NearPOINotification.css";
import getString from "../../strings/strings";
import NotificationSVG from "../../icons/NotificationSVG.js";

export const NearPOINotification = (props) => {
  const handlePOIMoreInfo = () => {
    console.log("handlePOIMoreInfo");
    props.setIsDisplayCurrPOIInfo(true);
    props.setIsDisplayCurrPOINotif(false);
  };

  const handlePOINoMoreInfo = () => {
    console.log("handlePOIMoreInfo");
    props.setIsDisplayCurrPOIInfo(false);
    props.setIsDisplayCurrPOINotif(false);
  };

  return (
    <>
      {props.isDisplayCurrPOINotif ? (
        <div className="loccation-error-cont">
          <div className="near-poi-heading">
            <NotificationSVG></NotificationSVG>

            <hr className="near-poi-hr"></hr>
            <div>
              <h3 className="near-poi-heading-title">
                {getString("NEAR_POI_TITLE")}
              </h3>
              <h2 className="near-poi-text"> {getString("WANT_MORE_INTO")}</h2>
            </div>
          </div>

          <div className="near-poi-button-container">
            <button
              className="near-poi-button-later"
              onClick={handlePOINoMoreInfo}
            >
              {getString("LATER")}
            </button>
            <button className="near-poi-button-ok" onClick={handlePOIMoreInfo}>
              {getString("YES")}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
