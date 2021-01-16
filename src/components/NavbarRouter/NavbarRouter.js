import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { NavbarLinks } from "../NavbarLinks/NavbarLinks";
import { Scan } from "../Scan/Scan";
import { Tracks } from "../Tracks/Tracks";
import { Settings } from "../Settings/Settings";

export const NavbarRouter = (props) => {
  return (
    <Router>
      <div>
        <NavbarLinks
          selected={props.selected}
          setSelected={props.setSelected}
        ></NavbarLinks>
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
          path="/tracks"
          render={() => (
            <Tracks
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

export default NavbarRouter;
