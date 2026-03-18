import React, { useState } from "react";

const LiveConsole = () => {

  const [logs, setLogs] = useState([]);

  const startScan = () => {

    setLogs([]);

    const scanSteps = [
      "Initializing Recon...",
      "Collecting DNS records...",
      "Finding Subdomains...",
      "Scanning Open Ports...",
      "Detecting Technologies...",
      "Checking Security Headers...",
      "Searching Vulnerabilities...",
      "Generating Report...",
      "Scan Completed"
    ];

    scanSteps.forEach((step, index) => {

      setTimeout(() => {

        setLogs(prev => [...prev, step]);

      }, index * 1000);

    });

  };

  return (

    <div className="bg-black p-6 rounded-xl border border-green-500 mt-10">

      <h2 className="text-green-400 text-xl mb-4">
        Live Scan Console
      </h2>

      <button
        onClick={startScan}
        className="bg-green-600 px-4 py-2 rounded mb-4 hover:bg-green-500"
      >
        Start Scan
      </button>

      <div className="bg-gray-950 p-4 rounded h-64 overflow-auto font-mono text-green-400">

        {logs.map((log, index) => (

          <div key={index}>
            {">"} {log}
          </div>

        ))}

      </div>

    </div>

  );

};

export default LiveConsole;