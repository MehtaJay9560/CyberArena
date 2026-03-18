import React, { useState } from "react";

const PortScanner = () => {

  const [target, setTarget] = useState("");
  const [results, setResults] = useState([]);

  const scanPorts = () => {

    if (!target) return;

    const ports = [
      { port: 80, status: "OPEN" },
      { port: 443, status: "OPEN" },
      { port: 22, status: "CLOSED" },
      { port: 21, status: "CLOSED" },
      { port: 3306, status: "CLOSED" },
      { port: 8080, status: "OPEN" }
    ];

    setResults(ports);
  };

  return (

    <div className="bg-gray-900 p-6 rounded border border-gray-800">

      <h2 className="text-xl text-red-400 mb-4">
        Port Scanner
      </h2>

      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Enter domain or IP..."
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="bg-gray-800 p-3 rounded w-full border border-gray-700"
        />

        <button
          onClick={scanPorts}
          className="bg-red-600 px-6 py-3 rounded hover:bg-red-700"
        >
          Scan
        </button>

      </div>

      <div className="space-y-2">

        {results.map((r, index) => (

          <div
            key={index}
            className="flex justify-between bg-gray-800 p-3 rounded border border-gray-700"
          >
            <span>Port {r.port}</span>

            <span
              className={
                r.status === "OPEN"
                ? "text-green-400"
                : "text-red-400"
              }
            >
              {r.status}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

};

export default PortScanner;