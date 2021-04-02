import React from "react";

import "./POIInfoContent.css";
import BackSVG from "../../icons/BackSVG.js";
import getIconByType from "../../data/getIconByType";
import { useHistory } from "react-router-dom";

export const POIInfoContent = (props) => {
  let history = useHistory();

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
        src={props.poi.img}
        alt={props.poi.name}
      ></img>

      <div className="info-poi-heading">
        <img
          className="poi-type"
          src={getIconByType(props.poi.type)}
          alt={props.poi.type}
        ></img>

        <div className="info-poi-title">
          <h1 className="info-poi-name">{props.poi.name}</h1>
          <div className="info-poi-details">
            <hr
              className={"poi-hr poi-hr-desc poi-hr-type-" + props.poi.type}
            ></hr>
            <div>
              <h2 className="poi-desc">{props.poi.desc}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="info-poi-content">
        <p className="info-poi-content-text">
          {props.poi.content.replaceAll("\\n", "\n")}
        </p>
      </div>
    </div>
  );
};
