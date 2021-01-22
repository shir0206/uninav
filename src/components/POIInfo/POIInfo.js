import React from "react";

import "./POIInfo.css";

import BackSVG from "../../icons/BackSVG.js";

import getTrackImageDB from "../../constants/getTrackImage";
import getIconType from "../../constants/getIconType";

export const POIInfo = (props) => {
  const handleCloseTracks = () => {
    props.setCurrPOIInfo(false);
  };

  return (
    <div className="info-poi">
      <button className="back-btn" onClick={handleCloseTracks}>
        <BackSVG></BackSVG>
      </button>

      <img
        className="info-poi-img"
        src={getTrackImageDB(props.item.img)}
        alt={props.item.name}
      ></img>

      <div className="info-poi-heading">
        <img
          className="poi-type"
          src={getIconType(props.item.type)}
          alt={props.item.type}
        ></img>

        <div className="info-poi-title">
          <h1 className="info-poi-name">{props.item.name}</h1>
          <div className="info-poi-details">
            <hr
              className={"poi-hr poi-hr-desc poi-hr-type-" + props.item.type}
            ></hr>
            <div>
              <h2 className="poi-desc">{props.item.desc}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="info-poi-content">
        <p className="info-poi-content-text">
          {props.item.content.replaceAll("\\n", "\n")}
        </p>
      </div>
    </div>
  );
};
