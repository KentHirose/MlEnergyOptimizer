import { useState } from "react";
import ModelSelector from "./components/ModelSelector";
import Map from "./components/Map";

function App() {
  const [step, setStep] = useState(1);
  const [modelData, setModelData] = useState(null);
  const [selectedServer, setSelectedServer] = useState(null);

  return (
    <div className="p-5">
      {step === 1 && <ModelSelector onNext={(data) => { setModelData(data); setStep(2); }} />}
      {step === 2 && <Map onSelect={(loc) => { setSelectedServer(loc); setStep(3); }} />}
      {step === 3 && selectedServer && (
        <div>
          <h2 className="text-xl font-bold">学習を予約</h2>
          <p><strong>選択したサーバー:</strong> {selectedServer.name}</p>
          <p><strong>実行時間:</strong> {selectedServer.time}</p>
          <p><strong>環境負荷指数:</strong> {selectedServer.ecoIndex}</p>
          <p>
            <strong>通常の東京AWSと比較:</strong> CO₂削減率 {selectedServer.diff}%
          </p>
          <button className="mt-5 px-4 py-2 bg-green-500 text-white">
            予約する
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
