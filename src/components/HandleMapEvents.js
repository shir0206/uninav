import React, { useState, useEffect } from "react";

import { useMapEvents } from "react-leaflet";

export const HandleMapEvents = (props) => {
  //Hook attaching the provided LeafletEventHandlerFnMap event handlers to the map instance
  //and returning the instance in any descendant of a MapContainer.
  const map = useMapEvents({
    click: (e) => {
      console.log("LOCATING", e.latlng);
    },
    move: () => {
      console.log("move");
    },
    moveend: () => {
      console.log("moveend");
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
};