import { useState, useEffect } from "react";

import "./App.css";
import "./styles/colors.css";
import { SplashScreen } from "./components/SplashScreen";
import { LocateUser } from "./components/LocateUser";
import { Settings } from "./components/Settings";
import { Menu } from "./components/Menu";
import { Map } from "./components/Map";

function App() {
  const [isLocateUser, setIsLocateUser] = useState(true);

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
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <LocateUser setIsLocateUser={setIsLocateUser}></LocateUser>
          <Settings
            displayPOITypes={displayPOITypes}
            setDisplayPOITypes={setDisplayPOITypes}
          ></Settings>

          <Menu selected={selected} setSelected={setSelected}></Menu>
        </>
      )}

      <Map
        setIsLocateUser={setIsLocateUser}
        isLocateUser={isLocateUser}
        displayPOITypes={displayPOITypes}
      ></Map>
    </>
  );
}

export default App;
