import { useState, useEffect } from "react";

import "./App.css";
import "./styles/colors.css";
import { SplashScreen } from "./components/SplashScreen/SplashScreen";
import { LocateUserButton } from "./components/LocateUserButton/LocateUserButton";
import { Map } from "./components/Map/Map";
import NavbarRouter from "./components/NavbarRouter/NavbarRouter";

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

  const [selectedTrack, setSelectedTrack] = useState(0);

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

          <NavbarRouter
            displayPOITypes={displayPOITypes}
            setDisplayPOITypes={setDisplayPOITypes}
            selectedTrack={selectedTrack}
            setSelectedTrack={setSelectedTrack}
          ></NavbarRouter>
        </>
      )}

      <Map
        setIsLocateUser={setIsLocateUser}
        isLocateUser={isLocateUser}
        displayPOITypes={displayPOITypes}
        isCenterUserLocation={isCenterUserLocation}
        setIsCenterUserLocation={setIsCenterUserLocation}
        setIsLocationError={setIsLocationError}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      ></Map>
    </>
  );
}

export default App;
