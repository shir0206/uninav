import React, { useState } from "react";
import "./menu.css";
import ScanSVG from "../icons/ScanSVG.js";
import RoutesSVG from "../icons/RoutesSVG.js";
import POIsSVG from "../icons/POIsSVG.js";
import getString from "../strings/strings";

export const Menu = (props) => {
  return (
    <div className="menu">
      <button className="menu-btn scan-menu-btn">
        <ScanSVG></ScanSVG>
        <h6 className="menu-btn-title">{getString("SCAN_BTN")}</h6>
      </button>
      <button className="menu-btn route-menu-btn">
        <RoutesSVG></RoutesSVG>
        <h6 className="menu-btn-title">{getString("ROUTES_BTN")}</h6>
      </button>
      <button className="menu-btn pois-menu-btn">
        <POIsSVG></POIsSVG>
        <h6 className="menu-btn-title">{getString("POIS_BTN")}</h6>
      </button>
    </div>
  );
};
