import { useState } from "react";

const models = ["CNN", "Transformer", "RNN"];
const datasets = ["画像", "テキスト", "音声"];
const trainingMethods = ["フルトレーニング", "ファインチューニング"];

const ModelSelector = ({ onNext }: { onNext: (data: any) => void }) => {
  const [model, setModel] = useState(models[0]);
  const [dataset, setDataset] = useState(datasets[0]);
  const [method, setMethod] = useState(trainingMethods[0]);

  const handleSubmit = () => {
    const estimatedEnergy = Math.random() * 100; // ダミー計算
    onNext({ model, dataset, method, estimatedEnergy });
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">モデルの計算量を予測</h2>
      <div className="mt-3">
        <label>モデル: </label>
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          {models.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>
      <div className="mt-3">
        <label>データセット: </label>
        <select value={dataset} onChange={(e) => setDataset(e.target.value)}>
          {datasets.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>
      <div className="mt-3">
        <label>学習方式: </label>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          {trainingMethods.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <button className="mt-5 px-4 py-2 bg-blue-500 text-white" onClick={handleSubmit}>
        次へ
      </button>
    </div>
  );
};

export default ModelSelector;
