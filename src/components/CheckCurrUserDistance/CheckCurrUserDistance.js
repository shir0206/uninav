import { useEffect } from "react";

import { useMap } from "react-leaflet";
import { mapCenter } from "../../constants/mapCenter";
import L from "leaflet";
import getString from "../../strings/strings";

export const CheckCurrUserDistance = (props) => {
  const map = useMap();

  // Check the user distance from the uni, at the app's first render
  useEffect(() => {
    let timeOut;

    // Wait a few seconds after the first render & center the map according to the user location
    if (props.isFirstRender) {
      timeOut = setTimeout(() => {
        props.setIsChangeMapView(true);
        props.setIsFirstRender(false);

        measureCurrUserDistance();
      }, 8000);
    }
    return () => clearTimeout(timeOut);
  }, [props.isFirstRender]);

  function measureCurrUserDistance() {
    // Init coords of the university center
    const centerLatLng = L.latLng(mapCenter.lat, mapCenter.lng);

    // Init coords of the current user position
    const currPositionLatLng = L.latLng(
      props.currLocationOptions.location.latitude,
      props.currLocationOptions.location.longitude
    );

    // Check the distance between the university center & the current user position
    const distance = map.distance(centerLatLng, currPositionLatLng);

    // Check the distance of the user from the university
    if (distance > 1000) {
      // If the user isn't at the universy, center the map to the user location only if he confirmed
      const isFollowDistancedUser = window.confirm(getString("TOO_FAR"));
      props.setIsCenterUserLocation(isFollowDistancedUser);
    } else {
      // center the map to the user location
      props.setIsCenterUserLocation(true);
    }
  }

  return null;
};
