import React, { useState } from "react";
import "./settings.css";

import { DisplayPOISettings } from "./DisplayPOISettings";
import POIsSVG from "../icons/POIsSVG.js";
import getString from "../strings/strings";

import settingsIcon from "../icons/settings.svg";

export const Settings = (props) => {
  const [openSettings, setOpenSettings] = useState(false);

  const handleChange = (event) => {
    // updating an object instead of a Map
    props.setDisplayPOITypes({
      ...props.displayPOITypes,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <button
        className="settings-button"
        onClick={() => {
          setOpenSettings(true);
        }}
      >
        <img src={settingsIcon} alt="settings"></img>
      </button>

      {openSettings && (
        <div className="settings">
          <br />

          <DisplayPOISettings
            displayPOITypes={props.displayPOITypes}
            setDisplayPOITypes={props.setDisplayPOITypes}
          ></DisplayPOISettings>

          <button
            className="save"
            onClick={() => {
              setOpenSettings(false);
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
