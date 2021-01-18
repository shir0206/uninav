import React from "react";
import "./Scan.css";

import { useHistory } from "react-router-dom";

import getString from "../../strings/strings";

export const Scan = (props) => {
  let history = useHistory();

  const handleCloseScan = () => {
    // Create a clone of the current state of selected flags
    let temp = JSON.parse(JSON.stringify(props.selected));

    // Set all the flags in the clone to false
    Object.keys(temp).forEach((v) => (temp[v] = false));

    props.setSelected(temp);

    const path = `/uninav/`;
    history.push(path);
  };

  return (
    <div className="scan">
      Scan
      <button onClick={handleCloseScan}>{getString("OK")}</button>
    </div>
  );
};
