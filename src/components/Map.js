import React, { useState, useEffect } from "react";

import "./map.css";
import { MapContainer, TileLayer } from "react-leaflet";

import { AllRoutes } from "./AllRoutes";
import { AllPOIs } from "./AllPOIs";
import { HandleMapEvents } from "./HandleMapEvents";
import { ChangeMapView } from "./ChangeMapView";
import { CheckCurrUserDistance } from "./CheckCurrUserDistance";

import { CurrUserPosition } from "./CurrUserPosition";

import useWatchLocation from "../hooks/useWatchLocation";
import { geolocationOptions } from "../constants/geolocationOptions";
import { mapCenter } from "../constants/mapCenter";
import { mapZoom } from "../constants/mapZoom";

import getAlert from "../alerts/alerts";

export const Map = (props) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isChangeMapView, setIsChangeMapView] = useState(!isFirstRender);

  // Initiate geolocation & start following the user
  const currLocationOptions = useWatchLocation(
    props.isLocateUser,
    geolocationOptions
  );

  // Cancel geolocation & stop following the user
  function handleCancelLocationWatch() {
    currLocationOptions.cancelLocationWatch();
    props.setIsLocateUser(false);
    getAlert("cancelLocationWatch");
  }

  // useEffect(() => {
  //   if (!currLocationOptions.location) return;
  // }, [currLocationOptions.location, currLocationOptions.cancelLocationWatch]);

  //
  // useEffect(() => {
  //   if (currLocationOptions.error) {
  //     props.setIsLocationError(true);
  //   }
  // }, [currLocationOptions]);

  useEffect(() => {
    alert("test");
    if (currLocationOptions.error) {
      props.setIsLocationError(true);
    }
  }, [currLocationOptions.error]);

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

      <AllPOIs displayPOITypes={props.displayPOITypes}></AllPOIs>

      <AllRoutes />

      <CurrUserPosition
        isLocateUser={props.isLocateUser}
        location={currLocationOptions.location}
        error={currLocationOptions.error}
      ></CurrUserPosition>

      {currLocationOptions.location && (
        <CheckCurrUserDistance
          isFirstRender={isFirstRender}
          setIsFirstRender={setIsFirstRender}
          currLocationOptions={currLocationOptions}
          setIsChangeMapView={setIsChangeMapView}
          setIsCenterUserLocation={props.setIsCenterUserLocation}
        ></CheckCurrUserDistance>
      )}

      <HandleMapEvents
        isLocateUser={props.isLocateUser}
        setIsLocateUser={props.setIsLocateUser}
        handleCancelLocationWatch={handleCancelLocationWatch}
        error={currLocationOptions.error}
        isCenterUserLocation={props.isCenterUserLocation}
        setIsCenterUserLocation={props.setIsCenterUserLocation}
      />

      {isChangeMapView &&
        props.isCenterUserLocation &&
        currLocationOptions.location &&
        props.isLocateUser && (
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
