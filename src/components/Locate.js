import React, { useState, useEffect, useRef } from "react";
import "./locate.css";

export const Locate = (props) => {
  return (
    <button
      className="locate"
      onClick={() => {
        props.setLocate(true);
        props.setIsDragged(false);
        console.log("Locate", "false");
      }}
    >
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/744/744848.svg"
        alt="compass-locate me"
      ></img>
    </button>
  );
};
