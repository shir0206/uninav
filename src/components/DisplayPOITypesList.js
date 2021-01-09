import React, { useEffect } from "react";
import { ToggleButton } from "./ToggleButton";

import "./displayPOITypesList.css";

import poiTypes from "../constants/poiTypes";

export const DisplayPOITypesList = (props) => {
  function handlePoiDisplay(name, checked) {
    // Display the poi type on the map,
    // by turning on the flag of the relevant key in the displayPOITypes state.
    props.setDisplayPOITypes({
      ...props.displayPOITypes,
      [name]: checked,
    });

    // Turn off the flag of the state that hides all the types if it's on.
    if (props.hideAllPois) {
      props.setHideAllPois(false);
    }
  }

  useEffect(() => {
    console.log("props.displayPoiType: ", props.displayPOITypes);
  }, [props.displayPOITypes]);

  return (
    <ul className="display-poi">
      {poiTypes.map((item) => (
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
