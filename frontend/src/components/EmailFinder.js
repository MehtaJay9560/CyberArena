import React, { useState } from "react";

const EmailFinder = () => {

  const [domain, setDomain] = useState("");
  const [emails, setEmails] = useState([]);

  const findEmails = () => {

    if (!domain) return;

    const results = [
      "admin@" + domain,
      "contact@" + domain,
      "support@" + domain,
      "info@" + domain
    ];

    setEmails(results);
  };

  return (

    <div className="bg-gray-900 p-6 rounded border border-gray-800">

      <h2 className="text-xl text-green-400 mb-4">
        Email Finder
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
          onClick={findEmails}
          className="bg-green-600 px-6 py-3 rounded"
        >
          Search
        </button>

      </div>

      {emails.map((e, i) => (

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

export default EmailFinder;