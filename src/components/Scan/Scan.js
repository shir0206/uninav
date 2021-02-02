import React from "react";
import "./Scan.css";

import { useHistory } from "react-router-dom";

import getString from "../../strings/strings";

export const Scan = (props) => {
  let history = useHistory();

  const handleCloseScan = () => {
    // Create a clone of the current state of selected flags & Set all the flags to false
    const selectedNew = {};
    Object.keys(props.selected).forEach((key) => (selectedNew[key] = false));
    props.setSelected(selectedNew);

    history.push("/uninav/");
  };

  return (
    <div className="scan">
      Scan
      <button onClick={handleCloseScan}>{getString("OK")}</button>
    </div>
  );
};
