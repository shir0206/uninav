import React from "react";
import "./Tracks.css";

import { TracksList } from "../TracksList/TracksList";

import TracksSVG from "../../icons/TracksSVG.js";
import CloseSVG from "../../icons/CloseSVG.js";

import { useHistory } from "react-router-dom";

import getLocaleString from "../../locale/locale";

export const Tracks = (props) => {
  let history = useHistory();

  const handleCloseTracks = () => {
    // Create a clone of the current state of selectedNavButton flags & Set all the flags to false
    const selectedNew = {};
    Object.keys(props.selectedNavButton).forEach((key) => (selectedNew[key] = false));
    props.setSelectedNavButton(selectedNew);

    history.push("/uninav/");

  };

  return (
    <div className="tracks">
      <div className="tracks-heading">
        <TracksSVG selectedNavButton={true}></TracksSVG>
        <h4 className="tracks-heading-title">{getLocaleString("TRACKS_TITLE")}</h4>
        <button className="close-btn" onClick={handleCloseTracks}>
          <CloseSVG></CloseSVG>
        </button>
      </div>
      <TracksList
        selectedNavButton={props.selectedNavButton}
        setSelectedNavButton={props.setSelectedNavButton}
        setSelectedTrack={props.setSelectedTrack}
        selectedTrack={props.selectedTrack}
      ></TracksList>
    </div>
  );
};
