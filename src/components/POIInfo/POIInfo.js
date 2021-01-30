import React from "react";

import "./POIInfo.css";
import BackSVG from "../../icons/BackSVG.js";
import getTrackImageDB from "../../constants/getTrackImage";
import getIconType from "../../constants/getIconType";
import { useHistory, useParams } from "react-router-dom";

export const POIInfo = (props) => {
  let history = useHistory();
  const { poiId } = useParams();
  const nearPOI = props.mapPOIs.find((poi) => poi.id === poiId);

  const handleClosePOIs = () => {
    const path = `/uninav/`;
    history.push(path);
  };

  return (
    <div className="info-poi">
      <button className="back-btn" onClick={handleClosePOIs}>
        <BackSVG></BackSVG>
      </button>

      <img
        className="info-poi-img"
        src={getTrackImageDB(nearPOI.img)}
        alt={nearPOI.name}
      ></img>

      <div className="info-poi-heading">
        <img
          className="poi-type"
          src={getIconType(nearPOI.type)}
          alt={nearPOI.type}
        ></img>

        <div className="info-poi-title">
          <h1 className="info-poi-name">{nearPOI.name}</h1>
          <div className="info-poi-details">
            <hr
              className={"poi-hr poi-hr-desc poi-hr-type-" + nearPOI.type}
            ></hr>
            <div>
              <h2 className="poi-desc">{nearPOI.desc}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="info-poi-content">
        <p className="info-poi-content-text">
          {nearPOI.content.replaceAll("\\n", "\n")}
        </p>
      </div>
    </div>
  );
};
