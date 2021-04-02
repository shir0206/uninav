import React from "react";
import "./TracksList.css";

import { TrackCard } from "../TrackCard/TrackCard";

export const TracksList = (props) => {
  return (
    <ul className="tracks-list">
      {props.mapTracks.map((item) => (
        <div key={item.id}>
          <TrackCard
            item={item}
            selectedNavButton={props.selectedNavButton}
            setSelectedNavButton={props.setSelectedNavButton}
            setSelectedTrack={props.setSelectedTrack}
            isSelected={props.selectedTrack.id === item.id}
          ></TrackCard>
        </div>
      ))}
    </ul>
  );
};
