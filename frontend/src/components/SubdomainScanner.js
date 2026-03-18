import React, { useState } from "react";

const SubdomainScanner = () => {

  const [domain, setDomain] = useState("");
  const [results, setResults] = useState([]);

  const scanSubdomains = () => {

    if (!domain) return;

    const commonSubs = [
      "www",
      "api",
      "dev",
      "mail",
      "cdn",
      "shop",
      "blog",
      "beta",
      "admin"
    ];

    const found = commonSubs.map(sub => sub + "." + domain);

    setResults(found);
  };

  return (

    <div className="bg-gray-900 p-6 rounded border border-gray-800">

      <h2 className="text-xl text-red-400 mb-4">
        Subdomain Scanner
      </h2>

      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Enter domain..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="bg-gray-800 p-3 rounded w-full border border-gray-700"
        />

        <button
          onClick={scanSubdomains}
          className="bg-red-600 px-6 py-3 rounded hover:bg-red-700"
        >
          Scan
        </button>

      </div>

      <div className="space-y-2">

        {results.map((sub, index) => (

          <div
            key={index}
            className="bg-gray-800 p-3 rounded border border-gray-700"
          >
            {sub}
          </div>

        ))}

      </div>

    </div>

  );

};

export default SubdomainScanner;