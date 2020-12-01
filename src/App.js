import { useState } from "react";

import "./App.css";
import { Locate } from "./components/Locate";
import { Map } from "./components/Map";

function App() {
  const [isDragged, setIsDragged] = useState(false);
  const [locate, setLocate] = useState(false);
  const [displayPoiType, setDisplayPoiType] = useState({
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
      <Map
        locate={locate}
        setIsDragged={setIsDragged}
        isDragged={isDragged}
        displayPoiType={displayPoiType}
      ></Map>
    </>
  );
}

export default App;
