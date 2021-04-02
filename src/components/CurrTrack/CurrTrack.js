import React from "react";
import { Polyline } from "react-leaflet";

import "./CurrTrack.css";

export const CurrTrack = (props) => {
  if (props.selectedTrack === 0) return null;

  return (
    <>
      <div className="curr-track-btn">{props.selectedTrack.name}</div>

      <Polyline
        className="curr-track"
        positions={props.selectedTrack.points}
      ></Polyline>
    </>
  );
};
