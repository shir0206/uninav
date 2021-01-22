import { useEffect, useState } from "react";

import { useMap } from "react-leaflet";
import L from "leaflet";

export const CheckCurrUserDistanceFromPOI = (props) => {
  const [nearPOI, setNearPOI] = useState(null);

  const map = useMap();

  useEffect(() => {
    if (props.mapPOIs && props.currLocationOptions.location) {
      for (let i = 0; i < props.mapPOIs.length; i++) {
        let poi = props.mapPOIs[i];
        let userLocation = props.currLocationOptions.location;

        // Init coords of the curr poi
        const poiLatLng = L.latLng(poi.location.lat, poi.location.lng);

        // Init coords of the current user position
        const currPositionLatLng = L.latLng(
          userLocation.latitude,
          userLocation.longitude
        );

        // Check the distance between the curr poi & the current user position
        const distance = map.distance(poiLatLng, currPositionLatLng);

        // Check the distance of the user from the poi
        if (distance < 100) {
          // Set the curr poi as nearest (if hasn't set yet)
          if (nearPOI !== poi) {
            setNearPOI(poi);
            console.log("arrived " + poi.id);
            window.alert("arrived " + poi.id);
          }
          return;
        }
      }

      setNearPOI(null);
      console.log("not arrived");
    }
  }, [props.currLocationOptions.location, props.mapPOIs]);

  return null;
};
