import { useState, useEffect } from "react";

import "./App.css";
import "./styles/colors.css";
import { SplashScreen } from "./components/SplashScreen/SplashScreen";
import NavbarRouter from "./components/NavbarRouter/NavbarRouter";

function App() {
  const [displayPOITypes, setDisplayPOITypes] = useState({
    bench: false,
    area: true,
    table: false,
    art: true,
    lookout: true,
    history: true,
  });

  const [selectedTrack, setSelectedTrack] = useState(0);
  const [mapPOIs, setMapPOIs] = useState([]);
  const [mapTracks, setMapTracks] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  return (
    <>
      {loading && <SplashScreen />}

      <NavbarRouter
        displayPOITypes={displayPOITypes}
        setDisplayPOITypes={setDisplayPOITypes}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
        mapPOIs={mapPOIs}
        setMapPOIs={setMapPOIs}
        mapTracks={mapTracks}
        setMapTracks={setMapTracks}
      ></NavbarRouter>
    </>
  );
}

export default App;
