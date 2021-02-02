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
    // Create a clone of the current state of selected flags & Set all the flags to false
    const selectedNew = {};
    Object.keys(props.selected).forEach((key) => (selectedNew[key] = false));
    props.setSelected(selectedNew);

    history.push("/uninav/");

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
