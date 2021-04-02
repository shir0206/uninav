import React, { useEffect } from "react";
import "./AllPOIs.css";

import firebase from "../../firebase/Firebase";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

import { POIPopupContent } from "../POIPopupContent/POIPopupContent";

import getIconByType from "../../data/getIconByType";

export const AllPOIs = (props) => {
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
          props.setMapPOIs(dataArr);
        });
    },
    [] // Occurs when the state within is changing (once)
  );

  function buildIcon(type) {
    const iconType = getIconByType(type);

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
      {props.mapPOIs.map(
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
              {poi.type !== "bench" && poi.type !== "table" && (
                <Popup>
                  <POIPopupContent
                    poi={poi}
                    getIconByType={getIconByType}
                  ></POIPopupContent>
                </Popup>
              )}
            </Marker>
          )
      )}
    </>
  );
};
