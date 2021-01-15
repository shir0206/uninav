import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { Menu } from "../Menu/Menu";
import { Scan } from "../Scan/Scan";
import { Routes } from "../Routes/Routes";
import { Settings } from "../Settings/Settings";

import ScanSVG from "../../icons/ScanSVG.js";
import RoutesSVG from "../../icons/RoutesSVG.js";
import POIsSVG from "../../icons/POIsSVG.js";

import getString from "../../strings/strings";

import "../Menu/Menu.css";

export const MenuControl = (props) => {
  return (
    <Router>
      <div>
        <Menu selected={props.selected} setSelected={props.setSelected}></Menu>
        {/* <Links selected={props.selected} setSelected={props.setSelected} /> */}
        <Route
          exact
          path="/scan"
          render={() => (
            <Scan
              selected={props.selected}
              setSelected={props.setSelected}
              displayPOITypes={props.displayPOITypes}
              setDisplayPOITypes={props.setDisplayPOITypes}
            />
          )}
        />
        <Route
          exact
          path="/routes"
          render={() => (
            <Routes
              selected={props.selected}
              setSelected={props.setSelected}
              displayPOITypes={props.displayPOITypes}
              setDisplayPOITypes={props.setDisplayPOITypes}
            />
          )}
        />
        <Route
          exact
          path="/settings"
          render={() => (
            <Settings
              selected={props.selected}
              setSelected={props.setSelected}
              displayPOITypes={props.displayPOITypes}
              setDisplayPOITypes={props.setDisplayPOITypes}
            />
          )}
        />
      </div>
    </Router>
  );
};

export default MenuControl;

const Links = (props) => (
  <nav className="menu">
    <NavLink activeClassName="active" to="/scan">
      <>
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
      </>
    </NavLink>
    <NavLink activeClassName="active" to="/routes">
      <>
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
        {props.selected.routes && (
          <div className="menu-tab route-menu-tab"></div>
        )}
      </>
    </NavLink>
    <NavLink activeClassName="active" to="/settings">
      <>
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
      </>
    </NavLink>
  </nav>
);
