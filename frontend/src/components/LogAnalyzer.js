import React, { useState } from "react";

const LogAnalyzer = () => {

  const [logs, setLogs] = useState("");

  const analyzeLogs = () => {

    alert("Log analysis complete (demo)");

  };

  return (

    <div className="bg-gray-900 p-6 rounded border border-gray-800">

      <h2 className="text-xl text-blue-400 mb-4">
        Log Analyzer
      </h2>

      <textarea
        placeholder="Paste server logs here..."
        value={logs}
        onChange={(e) => setLogs(e.target.value)}
        className="w-full bg-gray-800 p-4 rounded border border-gray-700 mb-4"
      />

      <button
        onClick={analyzeLogs}
        className="bg-blue-600 px-6 py-3 rounded"
      >
        Analyze Logs
      </button>

    </div>

  );

};

export default LogAnalyzer;