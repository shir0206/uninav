import React, { useState } from "react";

import "./TrackCard.css";

import InfoSVG from "../../icons/InfoSVG.js";
import StartSVG from "../../icons/StartSVG.js";

import getString from "../../strings/strings";
import { TrackInfo } from "../TrackInfo/TrackInfo";

import { useHistory } from "react-router-dom";

export const TrackCard = (props) => {
  const [info, setInfo] = useState(false);
  let history = useHistory();

  const handleSelectTrack = () => {
    let temp = JSON.parse(JSON.stringify(props.selected));
    Object.keys(temp).forEach((v) => (temp[v] = false));
    props.setSelected(temp);

    props.setSelectedTrack(props.item);
    const path = `/uninav/`;
    history.push(path);
  };

  return (
    <>
      {!info ? (
        <div className="track-card">
          <h4 className="track-name">{props.item.name}</h4>

          <div className="track-content">
            <button
              className="track-info-btn"
              onClick={() => {
                // const path = `/` + props.item.name + `/`;
                // const path = `/uninav/tracks/` + props.item.name;
                // history.push(path);
                setInfo(true);
              }}
            >
              <InfoSVG></InfoSVG>
            </button>

            <hr className="track-hr track-hr-right"></hr>

            <div className="track-length-cont">
              <h3 className="track-length">{props.item.length}</h3>

              <h6 className="track-length-title">
                {getString("TRACK_LENGTH")}
              </h6>
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
      ) : (
        <TrackInfo
          setInfo={setInfo}
          item={props.item}
          selected={props.selected}
          setSelected={props.setSelected}
          selectedTrack={props.selectedTrack}
          setSelectedTrack={props.setSelectedTrack}
        ></TrackInfo>
      )}
    </>
  );
};
