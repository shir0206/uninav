import React, { useEffect } from "react";
import "./displayPOISettings.css";

import areaIcon from "../icons/area.svg";
import artIcon from "../icons/art.svg";
import benchIcon from "../icons/bench.svg";
import historyIcon from "../icons/history.svg";
import tableIcon from "../icons/table.svg";
import lookoutIcon from "../icons/lookout.svg";
import POIsSVG from "../icons/POIsSVG.js";

import getString from "../strings/strings";

export const DisplayPOISettings = (props) => {
  const handleChange = (event) => {
    // updating an object instead of a Map
    props.setDisplayPOITypes({
      ...props.displayPOITypes,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    console.log("props.displayPoiType: ", props.displayPOITypes);
  }, [props.displayPOITypes]);

  const checkboxes = [
    {
      name: "bench",
      key: "bench",
      label: getString("POI_BENCH"),
      icon: benchIcon,
    },
    {
      name: "area",
      key: "area",
      label: getString("POI_AREA"),
      icon: areaIcon,
    },
    {
      name: "table",
      key: "table",
      label: getString("POI_TABLE"),
      icon: tableIcon,
    },
    {
      name: "art",
      key: "art",
      label: getString("POI_ART"),
      icon: artIcon,
    },
    {
      name: "lookout",
      key: "lookout",
      label: getString("POI_LOOKOUT"),
      icon: lookoutIcon,
    },
    {
      name: "history",
      key: "history",
      label: getString("POI_HISTORY"),
      icon: historyIcon,
    },
  ];

  return (
    <div className="display-poi">
      <lable>{getString("POI_SETTINGS_TITLE")}</lable> <br />
      {checkboxes.map((item) => (
        <label key={item.key}>
          {item.label}
          <img src={item.icon} alt={item.name} className="checkbox-icon"></img>
          <input
            type="checkbox"
            name={item.name}
            checked={props.displayPOITypes[item.name]}
            onChange={handleChange}
          />
        </label>
      ))}
      <div class="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner"></span>
          <span className="toggle-switch-switch"></span>
        </label>
      </div>
      <label>{getString("POI_HIDE_ALL")}</label>
      <POIsSVG></POIsSVG>
    </div>
  );
};
