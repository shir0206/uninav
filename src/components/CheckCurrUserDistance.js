import { useEffect } from "react";

import { useMap } from "react-leaflet";
import { mapCenter } from "../constants/mapCenter";
import L from "leaflet";
import getString from "../strings/strings";

export const CheckCurrUserDistance = ({
  isFirstRender,
  currLocationOptions,
  setIsChangeMapView,
  setIsFirstRender,
  setIsCenterUserLocation,
}) => {
  const map = useMap();

  useEffect(() => {
    let timeOut;
    if (isFirstRender) {
      timeOut = setTimeout(() => {
        setIsChangeMapView(true);
        setIsFirstRender(false);

        measureCurrUserDistance();
      }, 8000);
    }
    return () => clearTimeout(timeOut);
  }, [isFirstRender]);

  function measureCurrUserDistance() {
    const centerLatLng = L.latLng(mapCenter.lat, mapCenter.lng);
    const currPositionLatLng = L.latLng(
      currLocationOptions.location.latitude,
      currLocationOptions.location.longitude
    );
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
      const isFollowDistancedUser = window.confirm(getString("TOO_FAR"));
      setIsCenterUserLocation(isFollowDistancedUser);
    } else {
      setIsCenterUserLocation(true);
    }
  }

  return null;
};
