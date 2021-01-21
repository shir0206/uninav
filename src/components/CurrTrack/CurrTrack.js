import React from "react";
import { Popup, Polyline } from "react-leaflet";
import "./CurrTrack.css";

import mapTrackPoints from "../../mapTracks/mapTrackPoints";

export const CurrTrack = (props) => {
  if (props.selectedTrack === 0) return null;

  let currTrackPoints = [];

  mapTrackPoints.map((item) => {
    if (item.id == props.selectedTrack) {
      currTrackPoints = item.track;
    }
  });


  return (
    <>
      <div className="curr-track-name"></div>
      <Polyline
        className="curr-track"
        positions={currTrackPoints}
        eventHandlers={{
          click: () => {
            console.log("trackA A clicked");
          },
        }}
      >
        <Popup>Hi track A~!</Popup>
      </Polyline>
    </>
  );
};
