import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { NavbarLinks } from "../NavbarLinks/NavbarLinks";
import { Scan } from "../Scan/Scan";
import { Map } from "../Map/Map";
import { Tracks } from "../Tracks/Tracks";
import { TrackInfo } from "../TrackInfo/TrackInfo";
import { POIInfo } from "../POIInfo/POIInfo";
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
          path="/uninav/scan"
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
          path="/uninav/tracks"
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
          path="/uninav/tracks/:trackId"
          render={() => (
            <TrackInfo
              selected={selected}
              setSelected={setSelected}
              setSelectedTrack={props.setSelectedTrack}
            ></TrackInfo>
          )}
        />

        <Route
          exact
          path="/uninav/pois/:poiId"
          render={() => <POIInfo mapPOIs={props.mapPOIs}></POIInfo>}
        />

        <Route
          exact
          path="/uninav/settings"
          render={() => (
            <Settings
              selected={selected}
              setSelected={setSelected}
              displayPOITypes={props.displayPOITypes}
              setDisplayPOITypes={props.setDisplayPOITypes}
            />
          )}
        />
        <Map
          displayPOITypes={props.displayPOITypes}
          selectedTrack={props.selectedTrack}
          setSelectedTrack={props.setSelectedTrack}
          mapPOIs={props.mapPOIs}
          setMapPOIs={props.setMapPOIs}
        ></Map>
      </div>
    </Router>
  );
};

export default NavbarRouter;
