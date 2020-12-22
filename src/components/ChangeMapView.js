import React, { useEffect } from "react";

import { useMap } from "react-leaflet";
import { mapCenter } from "../constants/mapCenter";
import L from "leaflet";

export const ChangeMapView = ({
  center,
  zoom,
  isFollowDistancedUser,
  setIsFollowDistancedUser,
}) => {
  // Except for its children, MapContainer props are immutable:
  // changing them after they have been set a first time will have no effect
  // on the Map instance or its container. The Leaflet Map instance created by
  // the MapContainer element can be accessed by child components using one of
  // the provided hooks or the MapConsumer component.

  const map = useMap();

  function measureDistance() {
    if (isFollowDistancedUser != null) {
      return isFollowDistancedUser;
    }

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
      const result = window.confirm(
        "You're too far away! Wanna me to follow you?"
      );
      setIsFollowDistancedUser(result);
      return result;
    }
    return true;
  }

  useEffect(() => {
    setTimeout(() => {
      console.log("ChangeMapView", center, " ", zoom);
      if (center.lat && center.lng && zoom) {
        if (!measureDistance()) {
          return null;
        }

        map.flyTo(center, zoom);
      }
    }, 8000);
  }, []);

  return null;
};
