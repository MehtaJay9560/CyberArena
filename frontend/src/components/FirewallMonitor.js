import React from "react";

const FirewallMonitor = () => {

  const events = [
    "Blocked IP 192.168.1.25",
    "Blocked Port Scan from 45.33.12.90",
    "Suspicious traffic detected",
    "Firewall rule triggered"
  ];

  return (

    <div className="bg-gray-900 p-6 rounded border border-gray-800">

      <h2 className="text-xl text-blue-400 mb-4">
        Firewall Monitor
      </h2>

      {events.map((e, i) => (

        <div
          key={i}
          className="bg-gray-800 p-3 rounded border border-gray-700 mb-2"
        >
          {e}
        </div>

      ))}

    </div>

  );

};

export default FirewallMonitor;