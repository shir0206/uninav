import React from "react";
import "./Routes.css";

import { useHistory } from "react-router-dom";

import getString from "../../strings/strings";

export const Routes = (props) => {
  let history = useHistory();

  const handleCloseRoutes = () => {
    // Create a clone of the current state of selected flags
    let temp = JSON.parse(JSON.stringify(props.selected));

    // Set all the flags in the clone to false
    Object.keys(temp).forEach((v) => (temp[v] = false));

    props.setSelected(temp);

    const path = `/`;
    history.push(path);
  };

  return (
    <div className="routes">
      Routes
      <button onClick={handleCloseRoutes}>{getString("OK")}</button>
    </div>
  );
};
