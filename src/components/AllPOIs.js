import React from "react";
import "./allPOIs.css";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

import areaIcon from "../icons/area.svg";
import artIcon from "../icons/art.svg";
import benchIcon from "../icons/bench.svg";
import historyIcon from "../icons/history.svg";
import tableIcon from "../icons/table.svg";
import markerIcon from "../icons/marker.svg";

export const AllPOIs = (props) => {
  function getIconType(type) {
    switch (type) {
      case "area":
        return areaIcon;
      case "art":
        return artIcon;
      case "bench":
        return benchIcon;
      case "history":
        return historyIcon;
      case "table":
        return tableIcon;
    }
    return markerIcon;
  }

  function buildIcon(type) {
    const iconType = getIconType(type);

    const myIcon = new L.Icon({
      iconUrl: iconType,
      iconRetinaUrl: iconType,
      iconAnchor: null,
      popupAnchor: [0, -15],
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(30, 45),
      className: "leaflet-div-poi-icon",
    });

    return myIcon;
  }

  return (
    <>
      {props.pois.map(
        (poi) =>
          props.displayPoiType[poi.type] && (
            <Marker
              key={poi.id}
              position={[poi.location.lat, poi.location.lng]}
              icon={buildIcon(poi.type)}
              eventHandlers={{
                click: () => {
                  console.log("marker ", poi.id, " clicked");
                },
              }}
            >
              <Popup>HI~!!!! {poi.id}</Popup>
            </Marker>
          )
      )}
    </>
  );
};
