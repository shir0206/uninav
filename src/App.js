import {
  useEffect,
  useState,
  callback,
  enableHighAccuracy,
  maximumAge,
  timeout,
} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGeolocation } from "./useGeolocation";
import { iconPerson } from "./iconPerson";
import "./App.css";
import { Locate } from "./components/Locate";

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

  const DEF_LAT = 32.9056256;
  const DEF_LNG = 35.3107968;

  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000,
  });

  console.log(geolocation);

  return (
    <>
      <Locate
        locate={locate}
        setLocate={setLocate}
        setIsDragged={setIsDragged}
      ></Locate>
      <div className="map">
        <MapContainer center={[DEF_LAT, DEF_LNG]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
          {locate && (
            <Marker position={[geolocation.latitude, geolocation.longitude]}>
              <Popup>HI~!!!!</Popup>
            </Marker>
          )}
          )
        </MapContainer>
      </div>
    </>
  );
}

export default App;
