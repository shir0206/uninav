import React, { useState } from "react";
import "./menu.css";
import ScanSVG from "../icons/ScanSVG.js";
import RoutesSVG from "../icons/RoutesSVG.js";
import POIsSVG from "../icons/POIsSVG.js";
import getString from "../strings/strings";

export const Menu = (props) => {
  return (
    <div className="menu">
      <button
        className="menu-btn scan-menu-btn"
        onClick={() => {
          props.setSelected({
            scan: true,
            routes: false,
            pois: false,
          });
        }}
      >
        <ScanSVG selected={props.selected.scan}></ScanSVG>
        <h6 className="menu-btn-title">{getString("SCAN_BTN")}</h6>
      </button>
      {props.selected.scan && <div className="menu-tab scan-menu-tab"></div>}

      <button
        className="menu-btn route-menu-btn"
        onClick={() => {
          props.setSelected({
            scan: false,
            routes: true,
            pois: false,
          });
        }}
      >
        <RoutesSVG selected={props.selected.routes}></RoutesSVG>
        <h6 className="menu-btn-title">{getString("ROUTES_BTN")}</h6>
      </button>
      {props.selected.routes && <div className="menu-tab route-menu-tab"></div>}
      <button
        className="menu-btn pois-menu-btn"
        onClick={() => {
          props.setSelected({
            scan: false,
            routes: false,
            pois: true,
          });
        }}
      >
        <POIsSVG></POIsSVG>
        <h6 className="menu-btn-title">{getString("POIS_BTN")}</h6>
      </button>
    </div>
  );
};
