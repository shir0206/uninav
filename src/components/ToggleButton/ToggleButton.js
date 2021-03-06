import React from "react";
import "./ToggleButton.css";

export const ToggleButton = (props) => {
  const toggle = () => {
    props.handleToggle(props.name, !props.checked);
  };

  return (
    <div
      className={props.name + " switch " + (props.checked ? "on" : "off")}
      onClick={toggle}
    />
  );
};
