import React, { useEffect, useState } from "react";
import StartSVG from "../../icons/StartSVG.js";
import BackSVG from "../../icons/BackSVG.js";
import firebase from "../../firebase/Firebase";
import { useHistory, useParams } from "react-router-dom";
import "./TrackInfo.css";

export const TrackInfo = ({
  selectedNavButton,
  setSelectedNavButton,
  setSelectedTrack,
}) => {
  let history = useHistory();
  const { trackId } = useParams();

  const [item, setItem] = useState(null);

  useEffect(
    () => {
      // DB Request, extract all the data from Firebase
      firebase
        .database()
        .ref("mapTracks/" + trackId)
        .once("value", (querySnapShot) => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          setItem(data);
        });
    },
    [] // Occurs once
  );

  const handleSelectTrack = () => {
    // Create a clone of the current state of selectedNavButton flags & Set all the flags to false
    const selectedNew = {};
    Object.keys(selectedNavButton).forEach((key) => (selectedNew[key] = false));
    setSelectedNavButton(selectedNew);

    setSelectedTrack(item);

    history.push("/uninav/");
  };

  const handleCloseTracks = () => {
    const path = `/uninav/tracks`;
    history.push(path);
  };

  return (
    <>
      {item && (
        <div className="track-info-content">
          <button className="back-btn" onClick={handleCloseTracks}>
            <BackSVG></BackSVG>
          </button>
          <img className="track-img" src={item.img} alt={item.name}></img>
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
      )}
    </>
  );
};
