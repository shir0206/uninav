import { useState, useEffect } from "react";

import "./App.css";
import { Locate } from "./components/Locate";
import { Settings } from "./components/Settings";
import { Map } from "./components/Map";

import useCurrentLocation from "./hooks/useCurrentLocation";
import useWatchLocation from "./hooks/useWatchLocation";
import { geolocationOptions } from "./constants/geolocationOptions";
import Location from "./components/Location";

function App() {
  const [isDragged, setIsDragged] = useState(false);
  const [locate, setLocate] = useState(false);
  const [displayPOITypes, setDisplayPOITypes] = useState({
    bench: false,
    area: true,
    table: false,
    art: true,
    lookout: true,
    history: true,
  });

  const { location: currentLocation, error: currentError } = useCurrentLocation(
    geolocationOptions
  );
  const { location, cancelLocationWatch, error } = useWatchLocation(
    geolocationOptions
  );
  const [isWatchinForLocation, setIsWatchForLocation] = useState(true);

  useEffect(() => {
    if (!location) return;

    // Cancel location watch after 3sec
    setTimeout(() => {
      cancelLocationWatch();
      setIsWatchForLocation(true);
    }, 10000);
  }, [location, cancelLocationWatch]);

  return (
    <>
      <div className="geolocationContainer">
        <p>Current position:</p>
        <Location location={currentLocation} error={currentError} />

        <p>Watch position: (Status: {isWatchinForLocation.toString()})</p>
        <Location location={location} error={error} />
      </div>

      <Locate
        locate={locate}
        setLocate={setLocate}
        setIsDragged={setIsDragged}
      ></Locate>
      <Settings
        displayPOITypes={displayPOITypes}
        setDisplayPOITypes={setDisplayPOITypes}
      ></Settings>

      <Map
        locate={locate}
        setIsDragged={setIsDragged}
        isDragged={isDragged}
        displayPOITypes={displayPOITypes}
      ></Map>
    </>
  );
}

export default App;
