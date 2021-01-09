import React from "react";
import "./hideAllPOITypes.css";

import { ToggleButton } from "./ToggleButton";

import UniNavLogoSVG from "../icons/UniNavLogoSVG.js";

import getString from "../strings/strings";

export const HideAllPOITypes = (props) => {
  const handleHideAllPois = (name, checked) => {
    props.setHideAllPois(checked);

    // When it is checked, set the all the poi types flags to 'false'
    if (checked) {
      // Create a clone of the current state of poi type flags
      let temp = JSON.parse(JSON.stringify(props.displayPOITypes));
      // let temp = props.displayPOITypes;

      // Set all the flags in the clone to false
      Object.keys(temp).forEach((v) => (temp[v] = false));

      props.setDisplayPOITypes(temp);
    }
  };

  return (
    <div className="poi-display-switch">
      <div className="poi-display-toggle">
        <ToggleButton
          checked={props.hideAllPois}
          name={"hideall"}
          handleToggle={handleHideAllPois}
        ></ToggleButton>
      </div>

      <h4 className="poi-display-label">{getString("POI_HIDE_ALL")}</h4>

      <div className="poi-display-icon">
        <UniNavLogoSVG width={24} height={23}></UniNavLogoSVG>
      </div>
    </div>
  );
};
