import React, { useState } from "react";
import "./settings.css";

import { HeadingSettings } from "./HeadingSettings";
import { DisplayPOITypesList } from "./DisplayPOITypesList";
import { HideAllPOITypes } from "./HideAllPOITypes";

import getString from "../strings/strings";

export const Settings = (props) => {
  const [hideAllPois, setHideAllPois] = useState(false);

  const handleCloseSettings = () => {
    // Create a clone of the current state of selected flags
    let temp = JSON.parse(JSON.stringify(props.selected));

    // Set all the flags in the clone to false
    Object.keys(temp).forEach((v) => (temp[v] = false));

    props.setSelected(temp);
  };

  return (
    <div className="settings">
      <HeadingSettings></HeadingSettings>

      <DisplayPOITypesList
        displayPOITypes={props.displayPOITypes}
        setDisplayPOITypes={props.setDisplayPOITypes}
        hideAllPois={hideAllPois}
        setHideAllPois={setHideAllPois}
      ></DisplayPOITypesList>

      <hr className="poi-display-hr"></hr>

      <HideAllPOITypes
        hideAllPois={hideAllPois}
        setHideAllPois={setHideAllPois}
        displayPOITypes={props.displayPOITypes}
        setDisplayPOITypes={props.setDisplayPOITypes}
      ></HideAllPOITypes>

      <hr className="poi-display-hr"></hr>

      <button className="settings-button" onClick={handleCloseSettings}>
        {getString("OK")}
      </button>
    </div>
  );
};
