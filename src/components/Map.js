import React, { useState, useEffect } from "react";
import { useGeolocation } from "../useGeolocation";

import "./map.css";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  useMapEvent,
  useMap,
} from "react-leaflet";

import mapPOIs from "./../mapPOIs/mapPOIs";

import { AllRoutes } from "./AllRoutes";
import { AllPOIs } from "./AllPOIs";

import { CurrUserPosition } from "./CurrUserPosition";

import useWatchLocation from "../hooks/useWatchLocation";
import { geolocationOptions } from "../constants/geolocationOptions";

import getAlert from "../alerts/alerts";

function HandleMapEvents(props) {
  //Hook attaching the provided LeafletEventHandlerFnMap event handlers to the map instance
  //and returning the instance in any descendant of a MapContainer.
  const map = useMapEvents({
    click: (e) => {
      console.log("LOCATING", e.latlng);
    },
    move: () => {
      console.log("move");
      // props.setIsDragged(true);
    },
    moveend: () => {
      console.log("moveend");
      // if (props.isDragged != null && !props.isDragged) {
      //   props.setIsDragged(true);
      // }

      if (props.isLocateUser != null && props.isLocateUser) {
        props.setIsLocateUser(false);
        props.handleCancelLocationWatch();
      }
    },
    unload: () => {
      console.log("unload");
    },
    load: () => {
      console.log("load");
    },
    zoom: () => {
      console.log("zoom");
    },

    locationfound: (location) => {
      console.log("location found:", location);
    },
    locationerror: (location) => {
      console.log("locationerror:", location);
    },
    popupopen: () => {
      console.log("popupopen");
    },
    popupclose: () => {
      console.log("popupclose");
    },
  });
  return null;
}

function ChangeView({ center, zoom }) {
  const map = useMap();

  if (center.lat && center.lng && zoom) {
    map.setView(center, zoom);
  }
  return null;
}
export const Map = (props) => {
  const [pois, setPois] = useState(mapPOIs);
  const [markers, setMarkers] = useState([]);

  const [center, setCenter] = useState({
    lat: 32.760803,
    lng: 35.020159,
  });

  function NewCenter() {
    //Hook attaching a single event handler to the map instance
    //and returning the instance in any descendant of a MapContainer.
    const map = useMapEvent("dblclick", () => {
      setCenter({
        lat: 32.760803,
        lng: 35.020159,
      });

      console.log("seCenter");
    });
    return null;
  }
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

  const overlay1 = [
    [-180, -180],
    [180, 180],
  ];

  const overlay = [
    [20, 20],
    [40, 40],
  ];

  const overlayOptions = {
    color: "white",
    fillColor: "white",
    fillOpacity: 0.6,
  };

  const currLocationOptions = useWatchLocation(geolocationOptions);

  useEffect(() => {
    if (!currLocationOptions.location) return;

    // if (props.isLocateUser) {
    //   handleCancelLocationWatch();
    // }
  }, [currLocationOptions.location, currLocationOptions.cancelLocationWatch]);

  function handleCancelLocationWatch() {
    currLocationOptions.cancelLocationWatch();
    props.setIsLocateUser(false);
    getAlert("cancelLocationWatch");
  }

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={18}
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
      />
      <HandleMapEvents />
      <ChangeView center={[center.lat, center.lng]} zoom={18} />
    </MapContainer>
  );
};
