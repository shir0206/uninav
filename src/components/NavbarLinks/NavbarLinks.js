import React from "react";
import "./NavbarLinks.css";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import ScanSVG from "../../icons/ScanSVG.js";
import TracksSVG from "../../icons/TracksSVG.js";
import POIsSVG from "../../icons/POIsSVG.js";

import getString from "../../strings/strings";

export const NavbarLinks = (props) => {
  return (
    <nav className="navbar">
      <NavLink activeClassName="active" to="/uninav/scan" className="scan-navbar-btn">
        <>
          <button
            className="navbar-btn scan-navbar-btn"
            onClick={() => {
              props.setSelected({
                scan: true,
                tracks: false,
                settings: false,
              });
            }}
          >
            <ScanSVG selected={props.selected.scan}></ScanSVG>
            <h6 className="navbar-btn-title">{getString("SCAN_BTN")}</h6>
          </button>
          {props.selected.scan && <div className="navbar-tab scan-navbar-tab"></div>}
        </>
      </NavLink>
      <NavLink activeClassName="active" to="/uninav/tracks" className="track-navbar-btn">
        <>
          <button
            className="navbar-btn track-navbar-btn"
            onClick={() => {
              props.setSelected({
                scan: false,
                tracks: true,
                settings: false,
              });
            }}
          >
            <TracksSVG selected={props.selected.tracks}></TracksSVG>
            <h6 className="navbar-btn-title">{getString("TRACKS_BTN")}</h6>
          </button>
          {props.selected.tracks && (
            <div className="navbar-tab track-navbar-tab"></div>
          )}
        </>
      </NavLink>
      <NavLink activeClassName="active" to="/uninav/settings" className="settings-navbar-btn">
        <>
          <button
            className="navbar-btn settings-navbar-btn"
            onClick={() => {
              props.setSelected({
                scan: false,
                tracks: false,
                settings: true,
              });
            }}
          >
            <POIsSVG></POIsSVG>
            <h6 className="navbar-btn-title">{getString("POIS_BTN")}</h6>
          </button>
        </>
      </NavLink>
    </nav>
  );
};
