import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { NavbarLinks } from "../NavbarLinks/NavbarLinks";
import { Scan } from "../Scan/Scan";
import { Tracks } from "../Tracks/Tracks";
import { Settings } from "../Settings/Settings";

export const NavbarRouter = (props) => {
  const [selected, setSelected] = useState({
    scan: false,
    tracks: false,
    settings: false,
  });

  return (
    <Router>
      <div>
        <NavbarLinks
          selected={selected}
          setSelected={setSelected}
        ></NavbarLinks>
        <Route
          exact
          path="/scan"
          render={() => (
            <Scan
              selected={selected}
              setSelected={setSelected}
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
              selected={selected}
              setSelected={setSelected}
              displayPOITypes={props.displayPOITypes}
              setDisplayPOITypes={props.setDisplayPOITypes}
              selectedTrack={props.selectedTrack}
              setSelectedTrack={props.setSelectedTrack}
            />
          )}
        />
        <Route
          exact
          path="/settings"
          render={() => (
            <Settings
              selected={selected}
              setSelected={setSelected}
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
