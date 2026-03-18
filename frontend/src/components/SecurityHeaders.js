import React, { useState } from "react";
import { motion } from "framer-motion";

const SecurityHeaders = () => {

  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const analyzeHeaders = () => {

    if (!url) {
      setResult("Please enter a website URL");
      return;
    }

    setResult("Analyzing security headers for " + url + "...");

    setTimeout(() => {

      setResult(`
Target: ${url}

Security Header Check

Content-Security-Policy : Missing
X-Frame-Options : Present
Strict-Transport-Security : Present
X-Content-Type-Options : Present
Referrer-Policy : Missing

Risk Level: Medium

Recommendation:
Add missing headers to improve web security.
      `);

    }, 2000);

  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-10">

      <h2 className="text-2xl font-bold mb-4 text-green-400">
        Security Headers Analyzer
      </h2>

      <input
        type="text"
        placeholder="Enter website URL..."
        className="w-full p-3 rounded bg-gray-800 mb-4"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={analyzeHeaders}
        className="bg-green-600 px-6 py-2 rounded"
      >
        Analyze Headers
      </motion.button>

      {result && (
        <pre className="mt-6 bg-black p-4 rounded text-green-400">
          {result}
        </pre>
      )}

    </div>
  );
};

export default SecurityHeaders;