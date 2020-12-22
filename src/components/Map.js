import React, { useState, useEffect } from "react";
import { useGeolocation } from "../useGeolocation";

import "./map.css";
import { MapContainer, TileLayer } from "react-leaflet";

import mapPOIs from "./../mapPOIs/mapPOIs";

import { AllRoutes } from "./AllRoutes";
import { AllPOIs } from "./AllPOIs";
import { HandleMapEvents } from "./HandleMapEvents";
import { ChangeMapView } from "./ChangeMapView";

import { CurrUserPosition } from "./CurrUserPosition";

import useWatchLocation from "../hooks/useWatchLocation";
import { geolocationOptions } from "../constants/geolocationOptions";
import { mapCenter } from "../constants/mapCenter";
import { mapZoom } from "../constants/mapZoom";

import getAlert from "../alerts/alerts";

export const Map = (props) => {
  const [pois, setPois] = useState(mapPOIs);
  const [markers, setMarkers] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const currLocationOptions = useWatchLocation(
    props.isLocateUser,
    geolocationOptions
  );

  useEffect(() => {
    if (!currLocationOptions.location) return;
  }, [currLocationOptions.location, currLocationOptions.cancelLocationWatch]);

  function handleCancelLocationWatch() {
    currLocationOptions.cancelLocationWatch();
    props.setIsLocateUser(false);
    getAlert("cancelLocationWatch");
  }

  return (
    <MapContainer
      center={[mapCenter.lat, mapCenter.lng]}
      zoom={mapZoom}
      whenCreated={() => {
        console.log("created");
      }}
      whenReady={() => {
        console.log("ready!");
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />

      <CurrUserPosition
        isLocateUser={props.isLocateUser}
        location={currLocationOptions.location}
        error={currLocationOptions.error}
      ></CurrUserPosition>

      <AllRoutes />
      <AllPOIs
        markers={markers}
        pois={pois}
        displayPOITypes={props.displayPOITypes}
      ></AllPOIs>
      <HandleMapEvents
        isLocateUser={props.isLocateUser}
        setIsLocateUser={props.setIsLocateUser}
        handleCancelLocationWatch={handleCancelLocationWatch}
        error={currLocationOptions.error}
      />
      {currLocationOptions.location && props.isLocateUser && (
        <ChangeMapView
          center={{
            lat: currLocationOptions.location.latitude,
            lng: currLocationOptions.location.longitude,
          }}
          zoom={mapZoom}
          isFirstRender={isFirstRender}
          setIsFirstRender={setIsFirstRender}
        />
      )}
    </MapContainer>
  );
};
