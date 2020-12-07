import { useState } from "react";

import "./App.css";
import { Locate } from "./components/Locate";
import { Settings } from "./components/Settings";
import { Map } from "./components/Map";

function App() {
  const [isDragged, setIsDragged] = useState(false);
  const [locate, setLocate] = useState(false);
  const [displayPOITypes, setDisplayPOITypes] = useState({
    bench: false,
    area: true,
    table: false,
    statue: true,
    lookout: true,
    history: true,
  });

  return (
    <>
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
