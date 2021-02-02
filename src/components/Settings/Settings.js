import React, { useState } from "react";
import "./Settings.css";

import { useHistory } from "react-router-dom";

import { HeadingSettings } from "../HeadingSettings/HeadingSettings";
import { DisplayPOITypesList } from "../DisplayPOITypesList/DisplayPOITypesList";
import { HideAllPOITypes } from "../HideAllPOITypes/HideAllPOITypes";

import getString from "../../strings/strings";

export const Settings = (props) => {
  const [hideAllPois, setHideAllPois] = useState(false);

  let history = useHistory();

  const handleCloseSettings = () => {
    // Create a clone of the current state of selected flags & Set all the flags to false
    const selectedNew = {};
    Object.keys(props.selected).forEach((key) => (selectedNew[key] = false));
    props.setSelected(selectedNew);

    history.push("/uninav/");
  };

  return (
    <div className="settings-overlay">
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
    </div>
  );
};
