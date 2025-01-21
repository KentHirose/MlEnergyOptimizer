import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// サーバーの型定義
type ServerLocation = {
  name: string;
  lat: number;
  lng: number;
  ecoIndex: number;
  time: string;
  diff: number;
};

// 通常は選ばれないエリア & 環境負荷が低い時間帯を持つ候補地
const locations: ServerLocation[] = [
  { name: "アイスランド (深夜)", lat: 64.1355, lng: -21.8954, ecoIndex: 20, time: "深夜 2:00", diff: -80 },
  { name: "ノルウェー (未明)", lat: 60.472, lng: 8.4689, ecoIndex: 30, time: "未明 3:00", diff: -70 },
  { name: "カナダ (夜間)", lat: 56.1304, lng: -106.3468, ecoIndex: 50, time: "夜間 1:00", diff: -50 },
  { name: "北海道 (夜間)", lat: 43.0642, lng: 141.3469, ecoIndex: 40, time: "夜間 2:00", diff: -60 },
];

const Map = ({ onSelect }: { onSelect: (location: ServerLocation) => void }) => {
  return (
    <MapContainer center={[43.0642, 141.3469]} zoom={3} className="h-96 w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((loc, index) => (
        <Marker key={index} position={[loc.lat, loc.lng]}>
          <Popup>
            <h3 className="font-bold">{loc.name}</h3>
            <p><strong>時間帯:</strong> {loc.time}</p>
            <p><strong>環境負荷指数:</strong> {loc.ecoIndex}</p>
            <p><strong>CO₂削減:</strong> {loc.diff}%（通常のトレーニングより環境に優しい）</p>
            <button 
              className="mt-2 px-3 py-1 bg-green-500 text-white" 
              onClick={() => onSelect(loc)}
            >
              選択
            </button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
