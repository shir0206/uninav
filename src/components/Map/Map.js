import React, { useState, useEffect } from "react";

import "./Map.css";
import { MapContainer, TileLayer } from "react-leaflet";

import { AllTracks } from "../AllTracks/AllTracks";
import { AllPOIs } from "../AllPOIs/AllPOIs";
import { HandleMapEvents } from "../HandleMapEvents/HandleMapEvents";
import { ChangeMapView } from "../ChangeMapView/ChangeMapView";
import { CheckCurrUserDistance } from "../CheckCurrUserDistance/CheckCurrUserDistance";

import { CurrUserPosition } from "../CurrUserPosition/CurrUserPosition";

import useWatchLocation from "../../hooks/useWatchLocation";
import { geolocationOptions } from "../../constants/geolocationOptions";
import { mapCenter } from "../../constants/mapCenter";
import { mapZoom } from "../../constants/mapZoom";

import getAlert from "../../alerts/alerts";

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

  // If there's an error in geolocation, set error state
  useEffect(() => {
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

      <AllTracks selectedTrack={props.selectedTrack} />

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
          />
        )}
    </MapContainer>
  );
};
