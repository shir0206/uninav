import { useState, useEffect } from "react";

import "./App.css";
import "./styles/colors.css";
import { SplashScreen } from "./components/SplashScreen/SplashScreen";
import { LocateUserButton } from "./components/LocateUserButton/LocateUserButton";
import { Menu } from "./components/Menu/Menu";
import { Map } from "./components/Map/Map";
import MenuControl from "./components/MenuControl/MenuControl";

function App() {
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

          <MenuControl
            selected={selected}
            setSelected={setSelected}
            displayPOITypes={displayPOITypes}
            setDisplayPOITypes={setDisplayPOITypes}
          ></MenuControl>
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
    </>
  );
}

export default App;
