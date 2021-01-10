import React, { useEffect, useState } from "react";
import "./AllPOIs.css";

import firebase from "../../firebase/Firebase";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

import { POIPopupContent } from "../POIPopupContent/POIPopupContent";

import areaIcon from "../../icons/area.svg";
import artIcon from "../../icons/art.svg";
import benchIcon from "../../icons/bench.svg";
import historyIcon from "../../icons/history.svg";
import tableIcon from "../../icons/table.svg";
import markerIcon from "../../icons/marker.svg";
import lookoutIcon from "../../icons/lookout.svg";

export const AllPOIs = (props) => {
  const [mapPOIs, setMapPOIs] = useState([]);

  useEffect(
    () => {
      // DB Request, extract all the data from Firebase
      firebase
        .database()
        .ref("mapPOIs")
        .once("value", (querySnapShot) => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let dataArr = [...data];

          // Initialize the state with all the data recieved from DB
          setMapPOIs(dataArr);
        });
    },
    [] // Occurs when the state within is changing (once)
  );

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
      case "lookout":
        return lookoutIcon;
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
      {mapPOIs.map(
        (poi) =>
          props.displayPOITypes[poi.type] && (
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
              <Popup>
                <POIPopupContent
                  poi={poi}
                  getIconType={getIconType}
                ></POIPopupContent>
              </Popup>
            </Marker>
          )
      )}
    </>
  );
};
