import React, { useState, useEffect, useRef } from "react";
import { useGeolocation } from "../useGeolocation";

import "./map.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

export const Map = (props) => {
  const DEF_LAT = 32.9056256;
  const DEF_LNG = 35.3107968;

  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000,
  });

  console.log(geolocation);

  const PolylineA = [
    [32.9056356, 35.3103968],
    [32.9016356, 35.3109938],
    [32.9096326, 35.3117238],
  ];
  const PolylineB = [
    [32.9056356, 35.3103968],
    [32.9026356, 35.3102938],
    [32.9056326, 35.3107238],
  ];

  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };

  return (
    <MapContainer center={[DEF_LAT, DEF_LNG]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {props.locate && (
        <Marker position={[geolocation.latitude, geolocation.longitude]}>
          <Popup>HI~!!!!</Popup>
        </Marker>
      )}
      )
      <Polyline pathOptions={limeOptions} positions={PolylineA} />
      <Polyline pathOptions={purpleOptions} positions={PolylineB} />
    </MapContainer>
  );
};
