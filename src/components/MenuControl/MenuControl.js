import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { Scan } from "../Scan/Scan";
import { Routes } from "../Routes/Routes";
import { Settings } from "../Settings/Settings";

export const MenuControl = (props) => {
  return (
    <Router>
      <div>
        <Links />
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

const Links = () => (
  <nav>
    <NavLink activeClassName="active" to="/">
      Home
    </NavLink>
    <NavLink activeClassName="active" to="/scan">
      Scan
    </NavLink>
    <NavLink activeClassName="active" to="/routes">
      Routes
    </NavLink>
    <NavLink activeClassName="active" to="/settings">
      Settings
    </NavLink>
  </nav>
);

// const AAA = (props) => (
//   <Scan
//     selected={props.selected}
//     setSelected={props.setSelected}
//     displayPOITypes={props.displayPOITypes}
//     setDisplayPOITypes={props.setDisplayPOITypes}
//   ></Scan>
// );
// const BBB = (props) => (
//   <Routes
//     selected={props.selected}
//     setSelected={props.setSelected}
//     displayPOITypes={props.displayPOITypes}
//     setDisplayPOITypes={props.setDisplayPOITypes}
//   ></Routes>
// );
// const CCC = (props) => (
//   <Settings
//     selected={props.selected}
//     setSelected={props.setSelected}
//     displayPOITypes={props.displayPOITypes}
//     setDisplayPOITypes={props.setDisplayPOITypes}
//   ></Settings>
// );
