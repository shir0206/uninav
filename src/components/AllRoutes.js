import React, { useState, useEffect, useRef } from "react";
import { Popup, Polyline } from "react-leaflet";

import "./locate.css";

export const AllRoutes = (props) => {
  const routeA = [
    [32.7640483, 35.0166316],
    [32.763692, 35.017082],
    [32.763361, 35.016665],
    [32.7620995, 35.0182302],
    [32.7623612, 35.0200327],
    [32.763234, 35.019025],
    [32.7628534, 35.0185092],
  ];

  const routeB = [
    [32.762666, 35.016366],
    [32.762135, 35.016931],
    [32.761276, 35.018554],
    [32.760545, 35.019495],
  ];

  const routeC = [
    [32.761987, 35.018321],
    [32.761033, 35.019531],
    [32.761059, 35.019671],
    [32.760919, 35.019733],
    [32.760482, 35.020131],
    [32.760568, 35.020181],
    [32.760706, 35.020186],
    [32.760803, 35.020159],
    [32.760971, 35.02017],
    [32.761009, 35.020162],
    [32.761205, 35.020409],
  ];

  const styleRouteA = {
    color: "#00ff11",
    weight: "12",
    opacity: 0.8,
    lineCap: "round",
    className: "styleRouteA",
  };
  const styleRouteB = {
    color: "#ff00f7",
    weight: "6",
    opacity: 0.8,
    dashArray: "25 10",
  };
  const styleRouteC = { color: "#0008ff", weigth: "4", opacity: 0.5 };

  return (
    <>
      <Polyline
        pathOptions={styleRouteA}
        positions={routeA}
        eventHandlers={{
          click: () => {
            console.log("routeA A clicked");
          },
        }}
      >
        <Popup>HI routeA~!!!!!!!1111~!!!!</Popup>
      </Polyline>
      <Polyline
        pathOptions={styleRouteB}
        positions={routeB}
        eventHandlers={{
          click: () => {
            console.log("routeB B clicked");
          },
        }}
      >
        <Popup>HI routeB~!!!!!!!12222~!!!!</Popup>
      </Polyline>

      <Polyline
        pathOptions={styleRouteC}
        positions={routeC}
        eventHandlers={{
          click: () => {
            console.log("routeC A clicked");
          },
        }}
      >
        <Popup>HI routeC~!!!!!!!333~!!!!</Popup>
      </Polyline>
    </>
  );
};
