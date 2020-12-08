import React, { useEffect } from "react";
import "./displayPOISettings.css";

import areaIcon from "../icons/area.svg";
import artIcon from "../icons/art.svg";
import benchIcon from "../icons/bench.svg";
import historyIcon from "../icons/history.svg";
import tableIcon from "../icons/table.svg";
import lookoutIcon from "../icons/lookout.svg";

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
      label: "ספסל",
      icon: benchIcon,
    },
    {
      name: "area",
      key: "area",
      label: "איזור",
      icon: areaIcon,
    },
    {
      name: "table",
      key: "table",
      label: "שולחן",
      icon: tableIcon,
    },
    {
      name: "art",
      key: "art",
      label: "אומנות",
      icon: artIcon,
    },
    {
      name: "lookout",
      key: "lookout",
      label: "תצפית",
      icon: lookoutIcon,
    },
    {
      name: "history",
      key: "history",
      label: "אתר היסטורי",
      icon: historyIcon,
    },
  ];

  return (
    <div className="display-poi">
      <lable>מה יוצג במפה</lable> <br />
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
    </div>
  );
};
