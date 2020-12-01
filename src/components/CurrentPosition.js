import React, { useState, useEffect, useRef } from "react";
import { useGeolocation } from "../useGeolocation";

export const CurrentPosition = (props) => {
  const [position, error] = useGeolocation();

  if (!position && !error) {
    console.log("CurrentPosition: Waiting...");
    return null;
  }

  if (error) {
    console.log("CurrentPosition: Eror: ", error.message);
    return null;
  }

  console.log(
    "CurrentPosition: Latitude:",
    position.coords.latitude,
    " Longitude: ",
    position.coords.longitude
  );
  
  props.setCenter({
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  });

  return null;
};
