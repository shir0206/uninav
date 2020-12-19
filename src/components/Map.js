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

import getAlert from "../alerts/alerts";

export const Map = (props) => {
  const [pois, setPois] = useState(mapPOIs);
  const [markers, setMarkers] = useState([]);

  const [center, setCenter] = useState({
    lat: 32.760803,
    lng: 35.020159,
  });
  const [zoom, setZoom] = useState(18);

  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000,
  });

  console.log("geolocation: ", geolocation);

  //Except for its children, MapContainer props are immutable:
  // changing them after they have been set a first time will have no effect
  // on the Map instance or its container. The Leaflet Map instance created by
  // the MapContainer element can be accessed by child components using one of
  // the provided hooks or the MapConsumer component.

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
      center={[center.lat, center.lng]}
      zoom={zoom}
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
        setCenter={setCenter}
        center={center}
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
      />
      {currLocationOptions.location && props.isLocateUser && (
        <ChangeMapView
          center={{
            lat: currLocationOptions.location.latitude,
            lng: currLocationOptions.location.longitude,
          }}
          zoom={zoom}
          setIsLocateUser={props.setIsLocateUser}
        />
      )}
    </MapContainer>
  );
};
