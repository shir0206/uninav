import { useEffect, useState } from "react";

import { useMap } from "react-leaflet";
import L from "leaflet";

export const CheckCurrUserDistanceFromPOI = (props) => {
  const [nearPOI, setNearPOI] = useState(null);

  const map = useMap();

  function measureCurrUserDistanceFromPOI(poi, userLocation) {
    // Init coords of the university center
    const poiLatLng = L.latLng(poi.location.lat, poi.location.lng);

    // Init coords of the current user position
    const currPositionLatLng = L.latLng(
      userLocation.latitude,
      userLocation.longitude
    );

    // Check the distance between the university center & the current user position
    const distance = map.distance(poiLatLng, currPositionLatLng);

    // Check the distance of the user from the university
    if (distance < 1.5) {
      // If the user isn't at the universy, center the map to the user location only if he confirmed
      window.alert("arrived" + poi.id);
      setNearPOI(poi);
    } else {
      setNearPOI(null);
    }
  }

  useEffect(() => {
    if (props.mapPOIs && props.currLocationOptions.location) {
      props.mapPOIs.map((poi) => {
        measureCurrUserDistanceFromPOI(poi, props.currLocationOptions.location);
      });
    }
  }, [props.currLocationOptions.location, props.mapPOIs]);

  return null;
};
