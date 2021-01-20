import React from "react";

import "./TrackCard.css";

import InfoSVG from "../../icons/InfoSVG.js";
import StartSVG from "../../icons/StartSVG.js";

import getString from "../../strings/strings";

export const TrackCard = (props) => {
  return (
    <div className="track-card">
      <h4 className="track-name">{props.item.name}</h4>
      <button className="track-start-btn">
        <StartSVG></StartSVG>
      </button>

      <div className="track-content">
        <InfoSVG></InfoSVG>

        <h5 className="track-desc">{props.item.desc}</h5>

        <h3 className="track-length">{props.item.length}</h3>

        <h6 className="navbar-btn-title">{getString("TRACK_LENGTH")}</h6>
      </div>

      <ul className="track-tag-list">
        {props.item.tags.map((tag, index) => (
          <li className="track-tag" key={index}>
            <h5 className="track-tag-desc">{tag}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};
