import { useMap } from "react-leaflet";

export const ChangeMapView = (props) => {
  // Except for its children, MapContainer props are immutable:
  // changing them after they have been set a first time will have no effect
  // on the Map instance or its container. The Leaflet Map instance created by
  // the MapContainer element can be accessed by child components using one of
  // the provided hooks or the MapConsumer component.

  const map = useMap();

  if (props.center.lat && props.center.lng && props.zoom) {
    map.flyTo(props.center, props.zoom);
  }
  return null;
};
