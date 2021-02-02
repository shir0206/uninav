import React from "react";
import StartSVG from "../../icons/StartSVG.js";
import BackSVG from "../../icons/BackSVG.js";
import mapTracks from "../../mapTracks/mapTracks";
import { useHistory, useParams } from "react-router-dom";
import getTrackImageDB from "../../data/getTrackImage";
import "./TrackInfo.css";

export const TrackInfo = ({ selected, setSelected, setSelectedTrack }) => {
  let history = useHistory();
  const { trackId } = useParams();
  const item = mapTracks.find((t) => t.id === trackId);

  const handleSelectTrack = () => {
    // Create a clone of the current state of selected flags & Set all the flags to false
    const selectedNew = {};
    Object.keys(selected).forEach((key) => (selectedNew[key] = false));
    setSelected(selectedNew);

    setSelectedTrack(item);

    history.push("/uninav/");
  };

  const handleCloseTracks = () => {
    const path = `/uninav/tracks`;
    history.push(path);
  };

  return (
    <div className="track-info-content">
      <button className="back-btn" onClick={handleCloseTracks}>
        <BackSVG></BackSVG>
      </button>
      <img
        className="track-img"
        src={getTrackImageDB(item.img)}
        alt={item.name}
      ></img>
      <div className="info-heading">
        <h4 className="info-heading-title">{item.name}</h4>
        <button className="info-start-btn" onClick={handleSelectTrack}>
          <StartSVG></StartSVG>
        </button>
      </div>

      <div className="info-content">
        <p>{item.content.replaceAll("\\n", "\n")}</p>
      </div>
    </div>
  );
};
