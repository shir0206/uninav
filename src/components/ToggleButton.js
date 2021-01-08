import React, { useState } from "react";
import "./ToggleButton.css";

export const ToggleButton = (props) => {
  const [toggleState, setToggleState] = useState(false);

  function toggle() {
    setToggleState((toggleState) => {
      return !toggleState;
    });
  }

  return (
    <div
      className={"switch " + (toggleState ? "on" : "off")}
      onClick={toggle}
    />
  );
};
