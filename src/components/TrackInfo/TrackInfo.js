import React from "react";

import "./TrackInfo.css";

import StartSVG from "../../icons/StartSVG.js";
import BackSVG from "../../icons/BackSVG.js";

import { useHistory } from "react-router-dom";

import getTrackImageDB from "../../constants/getTrackImage";

export const TrackInfo = (props) => {
  let history = useHistory();

  const handleSelectTrack = () => {
    let temp = JSON.parse(JSON.stringify(props.selected));
    Object.keys(temp).forEach((v) => (temp[v] = false));
    props.setSelected(temp);

    props.setSelectedTrack(props.item);
    const path = `/uninav/`;
    history.push(path);
  };

  const handleCloseTracks = () => {
    props.setInfo(false);

    const path = `/tracks`;
    history.push(path);
  };

  return (
    <div className="track-info-content">
      <button className="back-btn" onClick={handleCloseTracks}>
        <BackSVG></BackSVG>
      </button>
      <img
        className="track-img"
        src={getTrackImageDB(props.item.img)}
        alt={props.item.name}
      ></img>
      <div className="info-heading">
        <h4 className="info-heading-title">{props.item.name}</h4>
        <button className="info-start-btn" onClick={handleSelectTrack}>
          <StartSVG></StartSVG>
        </button>
      </div>

      <div className="info-content">
        <p>{props.item.content.replaceAll("\\n", "\n")}</p>
      </div>
    </div>
  );
};