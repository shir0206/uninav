import React, { useState, useEffect } from "react";

import "./Map.css";
import { MapContainer, TileLayer } from "react-leaflet";

import { CurrTrack } from "../CurrTrack/CurrTrack";
import { AllPOIs } from "../AllPOIs/AllPOIs";
import { POIInfo } from "../POIInfo/POIInfo";
import { HandleMapEvents } from "../HandleMapEvents/HandleMapEvents";
import { ChangeMapView } from "../ChangeMapView/ChangeMapView";
import { CheckCurrUserDistance } from "../CheckCurrUserDistance/CheckCurrUserDistance";
import { CheckCurrUserDistanceFromPOI } from "../CheckCurrUserDistanceFromPOI/CheckCurrUserDistanceFromPOI";
import { LocateUserButton } from "../LocateUserButton/LocateUserButton";

import { CurrUserPosition } from "../CurrUserPosition/CurrUserPosition";

import useWatchLocation from "../../hooks/useWatchLocation";
import { geolocationOptions } from "../../constants/geolocationOptions";
import { mapCenter } from "../../constants/mapCenter";
import { mapZoom } from "../../constants/mapZoom";

import getAlert from "../../alerts/alerts";
import { NearPOINotification } from "../NearPOINotification/NearPOINotification";

export const Map = (props) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isChangeMapView, setIsChangeMapView] = useState(!isFirstRender);
  const [isLocateUser, setIsLocateUser] = useState(true);
  const [isCenterUserLocation, setIsCenterUserLocation] = useState(false);
  const [isLocationError, setIsLocationError] = useState(false);
  const [mapPOIs, setMapPOIs] = useState([]);
  const [isDisplayCurrPOINotif, setIsDisplayCurrPOINotif] = useState(false);
  const [isDisplayCurrPOIInfo, setIsDisplayCurrPOIInfo] = useState(false);
  const [nearPOI, setNearPOI] = useState(null);

  // Initiate geolocation & start following the user
  const currLocationOptions = useWatchLocation(
    isLocateUser,

    geolocationOptions
  );

  // Cancel geolocation & stop following the user
  function handleCancelLocationWatch() {
    currLocationOptions.cancelLocationWatch();
    setIsLocateUser(false);

    getAlert("cancelLocationWatch");
  }

  // If there's an error in geolocation, set error state
  useEffect(() => {
    if (currLocationOptions.error) {
      setIsLocationError(true);
    }
  }, [currLocationOptions.error]);

  const itemPOI = {
    desc: "במת ישיבה",
    id: "1",
    img: "1",
    location: {
      lat: 32.759852654767,
      lng: 35.0223930358948,
    },
    name: "במת ישיבה",
    type: "area",
    content:
      "קליר קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף לורם איפסום דולור סיט אמט, לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. \n\n הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וקה. קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. ",
  };

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
      <AllPOIs
        displayPOITypes={props.displayPOITypes}
        mapPOIs={mapPOIs}
        setMapPOIs={setMapPOIs}
      ></AllPOIs>
      <CurrTrack selectedTrack={props.selectedTrack} />
      <CurrUserPosition
        isLocateUser={isLocateUser}
        location={currLocationOptions.location}
        error={currLocationOptions.error}
      ></CurrUserPosition>
      {currLocationOptions.location && (
        <CheckCurrUserDistance
          isFirstRender={isFirstRender}
          setIsFirstRender={setIsFirstRender}
          currLocationOptions={currLocationOptions}
          setIsChangeMapView={setIsChangeMapView}
          setIsCenterUserLocation={setIsCenterUserLocation}
        ></CheckCurrUserDistance>
      )}
      {currLocationOptions.location && (
        <CheckCurrUserDistanceFromPOI
          mapPOIs={mapPOIs}
          setIsFirstRender={setIsFirstRender}
          currLocationOptions={currLocationOptions}
          setIsChangeMapView={setIsChangeMapView}
          setIsCenterUserLocation={setIsCenterUserLocation}
          isDisplayCurrPOINotif={isDisplayCurrPOINotif}
          setIsDisplayCurrPOINotif={setIsDisplayCurrPOINotif}
          nearPOI={nearPOI}
          setNearPOI={setNearPOI}
        ></CheckCurrUserDistanceFromPOI>
      )}
      <HandleMapEvents
        isLocateUser={isLocateUser}
        setIsLocateUser={setIsLocateUser}
        handleCancelLocationWatch={handleCancelLocationWatch}
        error={currLocationOptions.error}
        isCenterUserLocation={isCenterUserLocation}
        setIsCenterUserLocation={setIsCenterUserLocation}
      />
      {isChangeMapView &&
        isCenterUserLocation &&
        currLocationOptions.location &&
        isLocateUser && (
          <ChangeMapView
            center={{
              lat: currLocationOptions.location.latitude,
              lng: currLocationOptions.location.longitude,
            }}
            zoom={mapZoom}
          />
        )}
      <button
        className="btn-temp"
        onClick={() => {
          console.log("click");
          setIsDisplayCurrPOIInfo(true);
        }}
      >
        POI
      </button>
      {isDisplayCurrPOIInfo && (
        <POIInfo
          nearPOI={nearPOI}
          setIsDisplayCurrPOIInfo={setIsDisplayCurrPOIInfo}
        ></POIInfo>
      )}

      {isDisplayCurrPOINotif && (
        <NearPOINotification
          isDisplayCurrPOINotif={isDisplayCurrPOINotif}
          setIsDisplayCurrPOINotif={setIsDisplayCurrPOINotif}
          setIsDisplayCurrPOIInfo={setIsDisplayCurrPOIInfo}
        ></NearPOINotification>
      )}

      <LocateUserButton
        setIsLocateUser={setIsLocateUser}
        setIsCenterUserLocation={setIsCenterUserLocation}
        isLocationError={isLocationError}
      ></LocateUserButton>
    </MapContainer>
  );
};
