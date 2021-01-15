import { useState, useEffect } from "react";

import "./App.css";
import "./styles/colors.css";
import { SplashScreen } from "./components/SplashScreen/SplashScreen";
import { LocateUserButton } from "./components/LocateUserButton/LocateUserButton";
import { Scan } from "./components/Scan/Scan";
import { Routes } from "./components/Routes/Routes";
import { Settings } from "./components/Settings/Settings";
import { Menu } from "./components/Menu/Menu";
import { Map } from "./components/Map/Map";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  const [state, setState] = useState("Hi");

  const [isLocateUser, setIsLocateUser] = useState(true);
  const [isCenterUserLocation, setIsCenterUserLocation] = useState(false);
  const [isLocationError, setIsLocationError] = useState(false);
  const [displayPOITypes, setDisplayPOITypes] = useState({
    bench: false,
    area: true,
    table: false,
    art: true,
    lookout: true,
    history: true,
  });

  const [selected, setSelected] = useState({
    scan: false,
    routes: false,
    pois: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <LocateUserButton
            setIsLocateUser={setIsLocateUser}
            setIsCenterUserLocation={setIsCenterUserLocation}
            isLocationError={isLocationError}
          ></LocateUserButton>
          <Menu selected={selected} setSelected={setSelected}></Menu>

          <Router>
            <div>
              <Links />
              <Route exact path="/aaa" render={() => <AAA aaa={state} />} />
              <Route exact path="/bbb" render={() => <BBB bbb={state} />} />
              <Route exact path="/ccc" render={() => <CCC ccc={state} />} />
            </div>
          </Router>
        </>
      )}

      <Map
        setIsLocateUser={setIsLocateUser}
        isLocateUser={isLocateUser}
        displayPOITypes={displayPOITypes}
        isCenterUserLocation={isCenterUserLocation}
        setIsCenterUserLocation={setIsCenterUserLocation}
        setIsLocationError={setIsLocationError}
      ></Map>

      {selected.scan && (
        <Scan
          selected={selected}
          setSelected={setSelected}
          displayPOITypes={displayPOITypes}
          setDisplayPOITypes={setDisplayPOITypes}
        ></Scan>
      )}

      {selected.routes && (
        <Routes
          selected={selected}
          setSelected={setSelected}
          displayPOITypes={displayPOITypes}
          setDisplayPOITypes={setDisplayPOITypes}
        ></Routes>
      )}

      {selected.pois && (
        <Settings
          selected={selected}
          setSelected={setSelected}
          displayPOITypes={displayPOITypes}
          setDisplayPOITypes={setDisplayPOITypes}
        ></Settings>
      )}
    </>
  );
}

export default App;

const Links = () => (
  <nav>
    <NavLink activeClassName="active" to="/">
      Home
    </NavLink>
    <NavLink activeClassName="active" to="/aaa">
      AAA
    </NavLink>
    <NavLink activeClassName="active" to="/bbb">
      BBB
    </NavLink>
    <NavLink activeClassName="active" to="/ccc">
      CCC
    </NavLink>
  </nav>
);

const AAA = (props) => <h1>{props.aaa}</h1>;
const BBB = (props) => <h1>{props.bbb}</h1>;
const CCC = (props) => <h1>{props.ccc}</h1>;
