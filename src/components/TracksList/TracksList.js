import React from "react";

import { TrackCard } from "../TrackCard/TrackCard";

import mapTracks from "../../mapTracks/mapTracks";

export const TracksList = (props) => {
  return (
    <ul>
      {mapTracks.map((item) => (
        <div key={item.id}>
          <TrackCard item={item}></TrackCard>
        </div>
      ))}
    </ul>
  );
};
