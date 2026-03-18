import React from "react";

const ThreatMonitor = () => {

  const threats = [
    { type: "Brute Force Login Attempt", severity: "High" },
    { type: "Multiple Failed Logins", severity: "Medium" },
    { type: "Suspicious IP Access", severity: "High" },
    { type: "Port Scan Detected", severity: "Low" }
  ];

  return (

    <div className="bg-gray-900 p-6 rounded border border-gray-800">

      <h2 className="text-xl text-blue-400 mb-4">
        Threat Monitor
      </h2>

      {threats.map((t, i) => (

        <div
          key={i}
          className="flex justify-between bg-gray-800 p-3 rounded border border-gray-700 mb-2"
        >

          <span>{t.type}</span>

          <span
            className={
              t.severity === "High"
                ? "text-red-400"
                : t.severity === "Medium"
                ? "text-yellow-400"
                : "text-green-400"
            }
          >
            {t.severity}
          </span>

        </div>

      ))}

    </div>

  );

};

export default ThreatMonitor;