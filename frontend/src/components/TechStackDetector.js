import React, { useState } from "react";
import { motion } from "framer-motion";

const TechStackDetector = () => {

  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const detectTech = () => {

    if (!url) {
      setResult("Please enter a website URL");
      return;
    }

    setResult("Analyzing " + url + " ...");

    setTimeout(() => {
      setResult(`
Target: ${url}

Possible Technologies Detected:

Frontend:
- React
- Tailwind CSS

Backend:
- Node.js
- Express

Server:
- Nginx

Security:
- Cloudflare
      `);
    }, 2000);

  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-10">

      <h2 className="text-2xl font-bold mb-4 text-purple-400">
        Tech Stack Detector
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
        onClick={detectTech}
        className="bg-purple-600 px-6 py-2 rounded"
      >
        Detect Tech
      </motion.button>

      {result && (
        <pre className="mt-6 bg-black p-4 rounded text-green-400">
          {result}
        </pre>
      )}

    </div>
  );
};

export default TechStackDetector;