import React, { useState } from "react";
import "./settings.css";
import { DisplayPOISettings } from "./DisplayPOISettings";
import { ToggleButton } from "./ToggleButton";

import POIsSVG from "../icons/POIsSVG.js";
import getString from "../strings/strings";

export const Settings = (props) => {
  const [hideAllPois, setHideAllPois] = useState(false);

  const handleHideAllPois = (name, checked) => {
    setHideAllPois(checked);

    // When it is checked, set the all the poi types flags to 'false'
    if (checked) {
      // Create a clone of the current state of poi type flags
      let temp = JSON.parse(JSON.stringify(props.displayPOITypes));

      // Set all the flags in the clone to false
      Object.keys(temp).forEach((v) => (temp[v] = false));

      props.setDisplayPOITypes(temp);
    }
  };

  return (
    <>
      {props.selected.pois && (
        <div className="settings">
          <h4 className="poi-settings-title">
            {getString("POI_SETTINGS_TITLE")}
          </h4>

          <DisplayPOISettings
            displayPOITypes={props.displayPOITypes}
            setDisplayPOITypes={props.setDisplayPOITypes}
            hideAllPois={hideAllPois}
            setHideAllPois={setHideAllPois}
          ></DisplayPOISettings>

          <hr className="poi-display-hr"></hr>

          <div className="poi-display-switch">
            <div className="poi-display-toggle">
              <ToggleButton
                checked={hideAllPois}
                name={"hideall"}
                handleToggle={handleHideAllPois}
              ></ToggleButton>
            </div>

            <h4 className="poi-display-label">{getString("POI_HIDE_ALL")}</h4>

            <div className="poi-display-icon">
              <POIsSVG></POIsSVG>
            </div>
          </div>

          <hr className="poi-display-hr"></hr>

          <button
            className="save"
            onClick={() => {
              props.setSelected({
                scan: false,
                routes: false,
                pois: false,
              });
            }}
          >
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/190/190411.svg"
              alt="OK"
            ></img>
          </button>
        </div>
      )}
    </>
  );
};
