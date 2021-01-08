import React, { useEffect } from "react";
import { ToggleButton } from "./ToggleButton";

import "./displayPOISettings.css";

import areaIcon from "../icons/area.svg";
import artIcon from "../icons/art.svg";
import benchIcon from "../icons/bench.svg";
import historyIcon from "../icons/history.svg";
import tableIcon from "../icons/table.svg";
import lookoutIcon from "../icons/lookout.svg";

import getString from "../strings/strings";

export const DisplayPOISettings = (props) => {
  const handleChange = (event) => {
    // updating an object instead of a Map
    props.setDisplayPOITypes({
      ...props.displayPOITypes,
      [event.target.name]: event.target.checked,
    });

    if (props.hideAllPois) {
      props.setHideAllPois(false);
    }
  };

  const handleToggle = (event) => {
    // updating an object instead of a Map
    props.setDisplayPOITypes({
      ...props.displayPOITypes,
      [event.target.name]: event.target.checked,
    });

    if (props.hideAllPois) {
      props.setHideAllPois(false);
    }
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
    <ul className="display-poi">
      {checkboxes.map((item) => (
        <li key={item.key}>
          {item.label}
          <img src={item.icon} alt={item.name} className="checkbox-icon"></img>
          <ToggleButton
            checked={props.displayPOITypes[item.name]}
            name={item.name}
            displayPOITypes={props.displayPOITypes}
            setDisplayPOITypes={props.setDisplayPOITypes}
            hideAllPois={props.hideAllPois}
            setHideAllPois={props.setHideAllPois}
          ></ToggleButton>

          <input
            type="checkbox"
            name={item.name}
            checked={props.displayPOITypes[item.name]}
            onChange={handleChange}
          />
        </li>
      ))}
    </ul>
  );
};
