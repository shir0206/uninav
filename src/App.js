import { useState, useEffect } from "react";

import "./App.css";
import { Locate } from "./components/Locate";
import { Settings } from "./components/Settings";
import { Map } from "./components/Map";

import getAlert from "./alerts/alerts";

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

  const currLocationOptions = useWatchLocation(geolocationOptions);

  const [isWatchinForLocation, setIsWatchForLocation] = useState(true);

  useEffect(() => {
    if (!currLocationOptions.location) {
      getAlert("enableLocationWatch");
      return;
    }

    if (isDragged) {
      handleCancelLocationWatch();
    }
  }, [currLocationOptions.location, currLocationOptions.cancelLocationWatch]);

  function handleCancelLocationWatch() {
    currLocationOptions.cancelLocationWatch();
    setIsWatchForLocation(false);
    getAlert("cancelLocationWatch");
  }

  return (
    <>
      <div className="geolocationContainer">
        <p>Watch position: (Status: {isWatchinForLocation.toString()})</p>
        <Location
          location={currLocationOptions.location}
          error={currLocationOptions.error}
        />
      </div>

      <Locate
        locate={locate}
        setLocate={setLocate}
        setIsDragged={setIsDragged}
        setIsWatchForLocation={setIsWatchForLocation}
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
