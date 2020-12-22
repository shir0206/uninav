import React, { useEffect, useState } from "react";

import { useMap } from "react-leaflet";
import { mapCenter } from "../constants/mapCenter";
import L from "leaflet";
import { geoPropTypes } from "react-geolocated";

export const ChangeMapView = ({
  center,
  zoom,
  isFirstRender,
  setIsFirstRender,
}) => {
  // Except for its children, MapContainer props are immutable:
  // changing them after they have been set a first time will have no effect
  // on the Map instance or its container. The Leaflet Map instance created by
  // the MapContainer element can be accessed by child components using one of
  // the provided hooks or the MapConsumer component.

  const map = useMap();
  const [showContent, setShowContent] = useState(!isFirstRender);

  useEffect(() => {
    let timeOut;
    if (isFirstRender) {
      timeOut = setTimeout(() => {
        setShowContent(true);
        setIsFirstRender(false);
      }, 8000);
    }
    return () => clearTimeout(timeOut);
  }, [isFirstRender]);

  function measureDistance() {
    if (isFirstRender === false) return false;

    const centerLatLng = L.latLng(mapCenter.lat, mapCenter.lng);
    const currPositionLatLng = L.latLng(center.lat, center.lng);
    const distance = map.distance(centerLatLng, currPositionLatLng);

    console.log(
      "centerLatLng ",
      centerLatLng,
      "currPositionLatLng ",
      currPositionLatLng,
      "distance ",
      distance
    );

    if (distance > 1000) {
      const isFollowDistancedUser = window.confirm(
        "You're too far away! Wanna me to follow you?"
      );
      return isFollowDistancedUser;
    }
    return false;
  }

  if (showContent && center.lat && center.lng && zoom) {
    if (measureDistance()) {
      map.flyTo(center, zoom);
    }
  }

  return null;
};
