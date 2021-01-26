import React from "react";
import "./NearPOINotification.css";
import getString from "../../strings/strings";
import NotificationSVG from "../../icons/NotificationSVG.js";
import { useHistory } from "react-router-dom";

export const NearPOINotification = (props) => {
  let history = useHistory();

  const handlePOIMoreInfo = () => {
    props.setIsDisplayCurrPOINotif(false);

    const path = `/uninav/pois/` + props.nearPOI.id;

    history.push(path);
  };

  const handlePOINoMoreInfo = () => {
    props.setIsDisplayCurrPOINotif(false);

    const path = `/uninav/`;
    history.push(path);
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
