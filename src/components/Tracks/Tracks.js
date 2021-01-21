import React from "react";
import "./Tracks.css";

import { TracksList } from "../TracksList/TracksList";

import TracksSVG from "../../icons/TracksSVG.js";
import CloseSVG from "../../icons/CloseSVG.js";

import { useHistory } from "react-router-dom";

import getString from "../../strings/strings";

export const Tracks = (props) => {
  let history = useHistory();

  const handleCloseTracks = () => {
    // Create a clone of the current state of selected flags
    let temp = JSON.parse(JSON.stringify(props.selected));

    // Set all the flags in the clone to false
    Object.keys(temp).forEach((v) => (temp[v] = false));

    props.setSelected(temp);

    const path = `/uninav/`;
    history.push(path);
  };

  return (
    <div className="tracks">
      <div className="tracks-heading">
        <TracksSVG selected={true}></TracksSVG>
        <h4 className="tracks-heading-title">{getString("TRACKS_TITLE")}</h4>
        <button className="close-btn" onClick={handleCloseTracks}>
          <CloseSVG></CloseSVG>
        </button>
      </div>
      <TracksList
        selected={props.selected}
        setSelected={props.setSelected}
        setSelectedTrack={props.setSelectedTrack}
      ></TracksList>
    </div>
  );
};
