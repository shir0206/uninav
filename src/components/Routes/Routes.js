import React from "react";
import "./Routes.css";

import getString from "../../strings/strings";

export const Routes = (props) => {
  const handleCloseRoutes = () => {
    // Create a clone of the current state of selected flags
    let temp = JSON.parse(JSON.stringify(props.selected));

    // Set all the flags in the clone to false
    Object.keys(temp).forEach((v) => (temp[v] = false));

    props.setSelected(temp);
  };

  return (
    <div className="routes">
        Routes
      <button onClick={handleCloseRoutes}>{getString("OK")}</button>
    </div>
  );
};
