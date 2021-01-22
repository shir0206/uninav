import React from "react";

import "./POIInfo.css";

import BackSVG from "../../icons/BackSVG.js";

import getTrackImageDB from "../../constants/getTrackImage";
import getIconType from "../../constants/getIconType";

export const POIInfo = (props) => {
  const handleCloseTracks = () => {
    props.setIsDisplayCurrPOIInfo(false);
  };

  return (
    <div className="info-poi">
      <button className="back-btn" onClick={handleCloseTracks}>
        <BackSVG></BackSVG>
      </button>

      <img
        className="info-poi-img"
        src={getTrackImageDB(props.nearPOI.img)}
        alt={props.nearPOI.name}
      ></img>

      <div className="info-poi-heading">
        <img
          className="poi-type"
          src={getIconType(props.nearPOI.type)}
          alt={props.nearPOI.type}
        ></img>

        <div className="info-poi-title">
          <h1 className="info-poi-name">{props.nearPOI.name}</h1>
          <div className="info-poi-details">
            <hr
              className={"poi-hr poi-hr-desc poi-hr-type-" + props.nearPOI.type}
            ></hr>
            <div>
              <h2 className="poi-desc">{props.nearPOI.desc}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="info-poi-content">
        <p className="info-poi-content-text">
          {props.nearPOI.content.replaceAll("\\n", "\n")}
        </p>
      </div>
    </div>
  );
};
