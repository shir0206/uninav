import React, { useState } from "react";
import "./menu.css";
import ScanSVG from "../icons/ScanSVG.js";
import RoutesSVG from "../icons/RoutesSVG.js";
import POIsSVG from "../icons/POIsSVG.js";
import getString from "../strings/strings";
import "./settings.css";

import { DisplayPOISettings } from "./DisplayPOISettings";
import { ToggleButton } from "./ToggleButton";

export const Menu = (props) => {
  const [hideAllPois, setHideAllPois] = useState(false);

  const handleHideAllPois = (event) => {
    setHideAllPois(event.target.checked);

    // When it is checked, set the all the poi types flags to 'false'
    if (event.target.checked) {
      // Create a clone of the current state of poi type flags
      let temp = JSON.parse(JSON.stringify(props.displayPOITypes));

      // Set all the flags in the clone to false
      Object.keys(temp).forEach((v) => (temp[v] = false));

      props.setDisplayPOITypes(temp);
    }
  };

  return (
    <>
      <div className="menu">
        <button
          className="menu-btn scan-menu-btn"
          onClick={() => {
            props.setSelected({
              scan: true,
              routes: false,
              pois: false,
            });
          }}
        >
          <ScanSVG selected={props.selected.scan}></ScanSVG>
          <h6 className="menu-btn-title">{getString("SCAN_BTN")}</h6>
        </button>
        {props.selected.scan && <div className="menu-tab scan-menu-tab"></div>}

        <button
          className="menu-btn route-menu-btn"
          onClick={() => {
            props.setSelected({
              scan: false,
              routes: true,
              pois: false,
            });
          }}
        >
          <RoutesSVG selected={props.selected.routes}></RoutesSVG>
          <h6 className="menu-btn-title">{getString("ROUTES_BTN")}</h6>
        </button>
        {props.selected.routes && (
          <div className="menu-tab route-menu-tab"></div>
        )}
        <button
          className="menu-btn pois-menu-btn"
          onClick={() => {
            props.setSelected({
              scan: false,
              routes: false,
              pois: true,
            });
          }}
        >
          <POIsSVG></POIsSVG>
          <h6 className="menu-btn-title">{getString("POIS_BTN")}</h6>
        </button>
      </div>

      {props.selected.pois && (
        <div className="settings">
          <h4>{getString("POI_SETTINGS_TITLE")}</h4>

          <DisplayPOISettings
            displayPOITypes={props.displayPOITypes}
            setDisplayPOITypes={props.setDisplayPOITypes}
            hideAllPois={hideAllPois}
            setHideAllPois={setHideAllPois}
          ></DisplayPOISettings>

          <div>
            {getString("POI_HIDE_ALL")}
            <POIsSVG></POIsSVG>
            <input
              type="checkbox"
              name={"hideall"}
              checked={hideAllPois}
              onChange={handleHideAllPois}
            />
          </div>

          <ToggleButton></ToggleButton>

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
