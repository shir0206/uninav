import React, { useState, useEffect, useRef } from "react";
import { useGeolocation } from "../useGeolocation";

import "./map.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMapEvents,
  useMapEvent,
  useMap,
} from "react-leaflet";

// import { Routes } from "./Routes";
// import { POIs } from "./POIs";
// import { UserLocationTimer } from "./UserLocationTimer";

// import { InfoRoute } from "./InfoRoute";
// import { InfoPOI } from "./InfoPOI";

// import mapPOIs from "./../mapPOIs/mapPOIs";
// import mapStyles from "./../mapStyles/mapStyles";

function FindLocation() {
  //Hook attaching the provided LeafletEventHandlerFnMap event handlers to the map instance
  //and returning the instance in any descendant of a MapContainer.
  const map = useMapEvents({
    click: (e) => {
      console.log("LOCATING", e.latlng);
    },
    move: () => {
      console.log("move");
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
    moveend: () => {
      console.log("moveend");
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
  map.setView(center, zoom);
  return null;
}
export const Map = (props) => {
  // const [pois, setPois] = useState(mapPOIs);
  // const [markers, setMarkers] = useState([]);
  // const [userLocationCoords, setUserLocationCoords] = useState(null);
  // const [selected, setSelected] = useState(null);
  // const [selectedRoute, setSelectedRoute] = useState(null);
  const [center, setCenter] = useState({
    lat: 32.760803,
    lng: 35.020159,
  });

  function NewCenter() {
    //Hook attaching a single event handler to the map instance
    //and returning the instance in any descendant of a MapContainer.

    const map = useMapEvent("dblclick", () => {
      setCenter({
        lat: 50.5,
        lng: 30.5,
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

  //Except for its children, MapContainer props are immutable:
  // changing them after they have been set a first time will have no effect
  // on the Map instance or its container. The Leaflet Map instance created by
  // the MapContainer element can be accessed by child components using one of
  // the provided hooks or the MapConsumer component.

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
      {props.locate && (
        <Marker position={[geolocation.latitude, geolocation.longitude]}>
          <Popup>HI~!!!!</Popup>
        </Marker>
      )}
      )
      <Marker
        position={[50.5, 30.5]}
        eventHandlers={{
          click: () => {
            console.log("marker clicked");
          },
        }}
      />
      <Polyline
        pathOptions={limeOptions}
        positions={PolylineA}
        eventHandlers={{
          click: () => {
            console.log("Polyline A clicked");
          },
        }}
      >
        <Popup>HI!!!!!!!1111~!!!!</Popup>
      </Polyline>
      <Polyline
        pathOptions={purpleOptions}
        positions={PolylineB}
        eventHandlers={{
          click: () => {
            console.log("Polyline B clicked");
          },
        }}
      >
        <Popup>HI!!!!!!!12222~!!!!</Popup>
      </Polyline>
      <FindLocation />
      <NewCenter />
      <ChangeView center={[center.lat, center.lng]} zoom={18} />
    </MapContainer>
  );
};
