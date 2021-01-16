import React from "react";
import "./Menu.css";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import ScanSVG from "../../icons/ScanSVG.js";
import TracksSVG from "../../icons/TracksSVG.js";
import POIsSVG from "../../icons/POIsSVG.js";

import getString from "../../strings/strings";

export const Menu = (props) => {
  return (
    <nav className="menu">
      <NavLink activeClassName="active" to="/scan" className="scan-menu-btn">
        <>
          <button
            className="menu-btn scan-menu-btn"
            onClick={() => {
              props.setSelected({
                scan: true,
                tracks: false,
                pois: false,
              });
            }}
          >
            <ScanSVG selected={props.selected.scan}></ScanSVG>
            <h6 className="menu-btn-title">{getString("SCAN_BTN")}</h6>
          </button>
          {props.selected.scan && (
            <div className="menu-tab scan-menu-tab"></div>
          )}
        </>
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/tracks"
        className=" track-menu-btn"
      >
        <>
          <button
            className="menu-btn track-menu-btn"
            onClick={() => {
              props.setSelected({
                scan: false,
                tracks: true,
                pois: false,
              });
            }}
          >
            <TracksSVG selected={props.selected.tracks}></TracksSVG>
            <h6 className="menu-btn-title">{getString("TRACKS_BTN")}</h6>
          </button>
          {props.selected.tracks && (
            <div className="menu-tab track-menu-tab"></div>
          )}
        </>
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/settings"
        className=" pois-menu-btn"
      >
        <>
          <button
            className="menu-btn pois-menu-btn"
            onClick={() => {
              props.setSelected({
                scan: false,
                tracks: false,
                pois: true,
              });
            }}
          >
            <POIsSVG></POIsSVG>
            <h6 className="menu-btn-title">{getString("POIS_BTN")}</h6>
          </button>
        </>
      </NavLink>
    </nav>
  );
};
