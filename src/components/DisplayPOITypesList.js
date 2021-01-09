import React, { useEffect } from "react";
import { ToggleButton } from "./ToggleButton";

import "./displayPOITypesList.css";

import areaIcon from "../icons/area.svg";
import artIcon from "../icons/art.svg";
import benchIcon from "../icons/bench.svg";
import historyIcon from "../icons/history.svg";
import tableIcon from "../icons/table.svg";
import lookoutIcon from "../icons/lookout.svg";

import getString from "../strings/strings";

export const DisplayPOITypesList = (props) => {
  function handlePoiDisplay(name, checked) {
    props.setDisplayPOITypes({
      ...props.displayPOITypes,
      [name]: checked,
    });

    if (props.hideAllPois) {
      props.setHideAllPois(false);
    }
  }

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
        <div key={item.key} className="poi-display-switch">
          <div className="poi-display-toggle">
            <ToggleButton
              checked={props.displayPOITypes[item.name]}
              name={item.name}
              handleToggle={handlePoiDisplay}
            ></ToggleButton>
          </div>

          <h4 className="poi-display-label">{item.label}</h4>

          <div className="poi-display-icon">
            <img src={item.icon} alt={item.name}></img>
          </div>
        </div>
      ))}
    </ul>
  );
};
