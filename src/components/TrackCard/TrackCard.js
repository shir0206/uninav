import React from "react";

import "./TrackCard.css";

import InfoSVG from "../../icons/InfoSVG.js";
import StartSVG from "../../icons/StartSVG.js";

import getLocaleString from "../../locale/locale";

import { useHistory } from "react-router-dom";

export const TrackCard = (props) => {
  let history = useHistory();

  const handleSelectTrack = () => {
    // Create a clone of the current state of selectedNavButton flags & Set all the flags to false
    const selectedNew = {};
    Object.keys(props.selectedNavButton).forEach((key) => (selectedNew[key] = false));
    props.setSelectedNavButton(selectedNew);

    props.setSelectedTrack(props.item);

    history.push("/uninav/");
  };

  return (
    <div className="track-card">
      <h4 className="track-name">{props.item.name}</h4>

      <div className="track-content">
        <button
          className="track-info-btn"
          onClick={() => {
            const path = `/uninav/tracks/` + props.item.id;
            history.push(path);
          }}
        >
          <InfoSVG></InfoSVG>
        </button>

        <hr className="track-hr track-hr-right"></hr>

        <div className="track-length-cont">
          <h3 className="track-length">{props.item.length}</h3>

          <h6 className="track-length-title">{getLocaleString("TRACK_LENGTH")}</h6>
        </div>

        <hr className="track-hr track-hr-left"></hr>

        <h5 className="track-desc">{props.item.desc}</h5>
      </div>

      <ul className="track-tag-list">
        {props.item.tags.map((tag, index) => (
          <li className="track-tag" key={index}>
            <h5 className="track-tag-desc">{tag}</h5>
          </li>
        ))}
      </ul>

      <button className="track-start-btn" onClick={handleSelectTrack}>
        <StartSVG></StartSVG>
      </button>
    </div>
  );
};
