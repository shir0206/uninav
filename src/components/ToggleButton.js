import React, { useState } from "react";
import "./ToggleButton.css";

export const ToggleButton = (props) => {
  const [toggleState, setToggleState] = useState(props.checked);

  function toggle() {
    props.setDisplayPOITypes({
      ...props.displayPOITypes,
      [props.name]: !toggleState,
    });

    setToggleState((toggleState) => {
      return !toggleState;
    });

    if (props.hideAllPois) {
      props.setHideAllPois(false);
    }
  }

  return (
    <div
      className={"switch " + (toggleState ? "on" : "off")}
      onClick={toggle}
    />
  );
};
