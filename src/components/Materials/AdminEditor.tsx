import React, { useState } from 'react';

type Props = {
  initialJson: string;
};

export const AdminEditor: React.FC<Props> = ({ initialJson }) => {
  const [jsonText, setJsonText] = useState(initialJson);
  const [error, setError] = useState<string | null>(null);

  const validateJson = (txt: string) => {
    try {
      const parsed = JSON.parse(txt);
      if (!Array.isArray(parsed)) {
        setError("Top-level JSON should be an array of materials.");
        return false;
      }
      setError(null);
      return true;
    } catch (e: any) {
      setError(e.message);
      return false;
    }
  };

  const handleDownload = () => {
    if (!validateJson(jsonText)) return;
    const blob = new Blob([jsonText], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'materials.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Admin JSON Editor</h3>
      <p className="text-sm text-gray-600">Edit the material dataset JSON and click <strong>Download</strong> to get an updated file you can commit to <code>public/data/materials.json</code>.</p>
      <textarea value={jsonText} onChange={(e) => setJsonText(e.target.value)} rows={18} className="w-full p-3 border rounded font-mono text-sm" />
      {error && <div className="text-red-600">JSON error: {error}</div>}
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => validateJson(jsonText) && alert('JSON looks valid')}>Validate</button>
        <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={handleDownload}>Download materials.json</button>
      </div>
    </div>
  );
};
