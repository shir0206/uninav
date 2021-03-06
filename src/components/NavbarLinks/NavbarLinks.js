import React from "react";
import "./NavbarLinks.css";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import ScanSVG from "../../icons/ScanSVG.js";
import TracksSVG from "../../icons/TracksSVG.js";
import POIsSVG from "../../icons/POIsSVG.js";

import getLocaleString from "../../locale/locale";

export const NavbarLinks = (props) => {
  return (
    <nav className="navbar">
      <NavLink
        activeClassName="active"
        to="/uninav/scan"
        className="scan-navbar-btn"
      >
        <button
          className="navbar-btn scan-navbar-btn"
          onClick={() => {
            props.setSelectedNavButton({
              scan: true,
              tracks: false,
              settings: false,
            });
          }}
        >
          <ScanSVG selectedNavButton={props.selectedNavButton.scan}></ScanSVG>
          <h6 className="navbar-btn-title">{getLocaleString("SCAN_BTN")}</h6>
        </button>
        {props.selectedNavButton.scan && (
          <div className="navbar-tab scan-navbar-tab"></div>
        )}
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/uninav/tracks"
        className="track-navbar-btn"
      >
        <button
          className="navbar-btn track-navbar-btn"
          onClick={() => {
            props.setSelectedNavButton({
              scan: false,
              tracks: true,
              settings: false,
            });
          }}
        >
          <TracksSVG
            selectedNavButton={props.selectedNavButton.tracks}
          ></TracksSVG>
          <h6 className="navbar-btn-title">{getLocaleString("TRACKS_BTN")}</h6>
        </button>
        {props.selectedNavButton.tracks && (
          <div className="navbar-tab track-navbar-tab"></div>
        )}
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/uninav/settings"
        className="settings-navbar-btn"
      >
        <button
          className="navbar-btn settings-navbar-btn"
          onClick={() => {
            props.setSelectedNavButton({
              scan: false,
              tracks: false,
              settings: true,
            });
          }}
        >
          <POIsSVG></POIsSVG>
          <h6 className="navbar-btn-title">{getLocaleString("POIS_BTN")}</h6>
        </button>
      </NavLink>
    </nav>
  );
};
