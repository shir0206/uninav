import { useState, useEffect } from "react";

import "./App.css";
import { LocateUser } from "./components/LocateUser";
import { Settings } from "./components/Settings";
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

  return (
    <>
      <LocateUser setIsLocateUser={setIsLocateUser}></LocateUser>
      <Settings
        displayPOITypes={displayPOITypes}
        setDisplayPOITypes={setDisplayPOITypes}
      ></Settings>

      <Map
        setIsLocateUser={setIsLocateUser}
        isLocateUser={isLocateUser}
        displayPOITypes={displayPOITypes}
      ></Map>
    </>
  );
}

export default App;
