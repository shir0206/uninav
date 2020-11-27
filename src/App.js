import { MapContainer, TileLayer } from "react-leaflet";
import { useGeolocation } from "./useGeolocation";
import "./App.css";

function App() {
  const DEF_LAT = 48;
  const DEF_LNG = -123;

  return (
    <MapContainer center={[DEF_LAT, DEF_LNG]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default App;
