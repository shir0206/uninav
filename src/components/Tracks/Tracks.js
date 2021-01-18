import React from "react";
import "./Tracks.css";

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
      Tracks
      <button onClick={handleCloseTracks}>{getString("OK")}</button>
    </div>
  );
};
