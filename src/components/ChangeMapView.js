import { useMap } from "react-leaflet";

export const ChangeMapView = ({ center, zoom, setIsLocateUser }) => {
  const map = useMap();

  console.log("ChangeMapView", center, " ", zoom);
  if (center.lat && center.lng && zoom) {
    map.flyTo(center, zoom);
    setIsLocateUser(true);
  }
  return null;
};
