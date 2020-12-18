import { useMap } from "react-leaflet";

export const ChangeMapView = ({ center, zoom }) => {
  const map = useMap();

  if (center.lat && center.lng && zoom) {
    map.setView(center, zoom);
  }
  return null;
};
