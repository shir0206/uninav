import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";

import { Marker } from "react-leaflet";
import currPositionIcon from "../icons/currPosition.svg";

export const CurrUserPosition = (props) => {
  const currPosition = new L.Icon({
    iconUrl: currPositionIcon,
    iconRetinaUrl: currPositionIcon,
    iconAnchor: null,
    popupAnchor: [0, -15],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 45),
    className: "leaflet-div-icon",
  });

  return (
    <>
      {props.location ? (
        <div>
          <div className="location-console">
            Latitude: {props.location.latitude}
            Longitude:
            {props.location.longitude}
          </div>

          <Marker
            position={[props.location.latitude, props.location.longitude]}
            icon={currPosition}
          ></Marker>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {props.error && (
        <p className="errorMessage">Location Error: {props.error}</p>
      )}
    </>
  );
};
