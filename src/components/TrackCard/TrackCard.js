import React from "react";

import "./TrackCard.css";

import InfoSVG from "../../icons/InfoSVG.js";
import StartSVG from "../../icons/StartSVG.js";

import getString from "../../strings/strings";

export const TrackCard = (props) => {
  return (
    <div className="track-card">
      <h4>{props.item.name}</h4>
      <InfoSVG></InfoSVG>

      <h5 className="track-card-desc">{props.item.desc}</h5>

      <h3 className="track-card-length">{props.item.length}</h3>

      <h6 className="navbar-btn-title">{getString("TRACK_LENGTH")}</h6>

      <StartSVG></StartSVG>

      <ul className="track-card-tag-list">
        {props.item.tags.map((tag, index) => (
          <li className="track-card-tag" key={index}>
            <h5 className="track-card-tag-desc">{tag}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};
