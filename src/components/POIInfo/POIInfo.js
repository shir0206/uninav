import React from "react";

import "./POIInfo.css";

import BackSVG from "../../icons/BackSVG.js";

import getTrackImageDB from "../../constants/getTrackImage";

import areaIcon from "../../icons/area.svg";
import artIcon from "../../icons/art.svg";
import benchIcon from "../../icons/bench.svg";
import historyIcon from "../../icons/history.svg";
import tableIcon from "../../icons/table.svg";
import markerIcon from "../../icons/marker.svg";
import lookoutIcon from "../../icons/lookout.svg";

export const POIInfo = (props) => {
  function getIconType(type) {
    switch (type) {
      case "area":
        return areaIcon;
      case "art":
        return artIcon;
      case "bench":
        return benchIcon;
      case "history":
        return historyIcon;
      case "table":
        return tableIcon;
      case "lookout":
        return lookoutIcon;
    }
    return markerIcon;
  }

  const handleCloseTracks = () => {
    props.setCurrPOIInfo(false);
  };

  return (
    <div className="poi-info-content">
      <button className="back-btn" onClick={handleCloseTracks}>
        <BackSVG></BackSVG>
      </button>
      <img
        className="poi-img"
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
          <h1 className="poi-name">{props.item.name}</h1>
          <div className="poi-content">
            <hr
              className={"poi-hr poi-hr-desc poi-hr-type-" + props.item.type}
            ></hr>
            <div>
              <h2 className="poi-desc">{props.item.desc}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="info-content">
        <p>{props.item.content.replaceAll("\\n", "\n")}</p>
      </div>
    </div>
  );
};
