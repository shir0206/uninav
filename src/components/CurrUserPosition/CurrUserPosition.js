import React from "react";
import "./CurrUserPosition.css";

import L from "leaflet";

import { Marker } from "react-leaflet";
import { LocationErrorAlert } from "../LocationErrorAlert/LocationErrorAlert";

import currPositionIcon from "../../icons/currPosition.svg";

export const CurrUserPosition = (props) => {
  // User position icon settings
  const currPosition = new L.Icon({
    iconUrl: currPositionIcon,
    iconRetinaUrl: currPositionIcon,
    iconAnchor: null,
    popupAnchor: [0, -15],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 45),
    className: "leaflet-div-icon curr-user-position-icon",
  });

  return (
    <>
      {props.location ? (
        <>
          <p className="console-demo">
            LAT: {props.location.latitude} LNG: {props.location.longitude}
          </p>

          <Marker
            position={[props.location.latitude, props.location.longitude]}
            icon={currPosition}
          ></Marker>
        </>
      ) : (
        <p className="console-demo">Loading...</p>
      )}
      {props.error && (
        <>
          <p className="console-demo">Location Error: {props.error}</p>
          <LocationErrorAlert error={props.error}></LocationErrorAlert>
        </>
      )}
    </>
  );
};
