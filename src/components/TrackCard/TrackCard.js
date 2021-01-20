import React from "react";

import "./TrackCard.css";

import InfoSVG from "../../icons/InfoSVG.js";
import StartSVG from "../../icons/StartSVG.js";

import getString from "../../strings/strings";

export const TrackCard = (props) => {
  return (
    <div className="track-card">
      <h4 className="track-name">{props.item.name}</h4>

      <div className="track-content">
        <button className="track-info-btn">
          <InfoSVG></InfoSVG>
        </button>

        <hr className="track-hr track-hr-right"></hr>

        <div className="track-length-cont">
          <h3 className="track-length">{props.item.length}</h3>

          <h6 className="track-length-title">{getString("TRACK_LENGTH")}</h6>
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

      <button className="track-start-btn">
        <StartSVG></StartSVG>
      </button>
    </div>
  );
};
