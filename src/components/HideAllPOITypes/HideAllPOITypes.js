import React from "react";
import "./HideAllPOITypes.css";

import { ToggleButton } from "../ToggleButton/ToggleButton";

import UniNavLogoSVG from "../../icons/UniNavLogoSVG.js";

import getLocaleString from "../../locale/locale";

export const HideAllPOITypes = (props) => {
  const handleHideAllPois = (name, checked) => {
    props.setHideAllPois(checked);

    // When it is checked, set the all the poi types flags to 'false'
    if (checked) {
      // Create a clone of the current state of poi type flags & Set all the flags to false
      const displayPOITypesNew = {};
      Object.keys(props.displayPOITypes).forEach(
        (key) => (displayPOITypesNew[key] = false)
      );
      props.setDisplayPOITypes(displayPOITypesNew);
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

      <h4 className="poi-display-label">{getLocaleString("POI_HIDE_ALL")}</h4>

      <div className="poi-display-icon">
        <UniNavLogoSVG width={24} height={23}></UniNavLogoSVG>
      </div>
    </div>
  );
};
