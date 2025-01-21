import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// マーカーアイコンの設定
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const CloudServerMap = ({ servers }) => {
  return (
    <MapContainer center={[35.6895, 139.6917]} zoom={3} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {servers.map((server) => (
        <Marker key={server.id} position={[server.lat, server.lng]}>
          <Popup>
            <strong>{server.name}</strong>
            <br />
            CO₂排出量: {server.co2} g/kWh
            <br />
            再生可能エネルギー率: {server.renewable}%
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CloudServerMap;
