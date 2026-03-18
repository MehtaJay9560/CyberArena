import React, { useState } from "react";
import { motion } from "framer-motion";

const sites = [
  { name: "GitHub", url: "https://github.com/" },
  { name: "Twitter", url: "https://twitter.com/" },
  { name: "Instagram", url: "https://instagram.com/" },
  { name: "Reddit", url: "https://reddit.com/user/" },
  { name: "TikTok", url: "https://tiktok.com/@" }
];

const UsernameHunter = () => {

  const [username, setUsername] = useState("");
  const [results, setResults] = useState([]);

  const searchUsername = () => {

    if (!username) return;

    const generated = sites.map(site => ({
      site: site.name,
      link: site.url + username
    }));

    setResults(generated);

  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-10">

      <h2 className="text-2xl font-bold mb-4 text-cyan-400">
        Username Hunter
      </h2>

      <input
        type="text"
        placeholder="Enter username..."
        className="w-full p-3 rounded bg-gray-800 mb-4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={searchUsername}
        className="bg-cyan-600 px-6 py-2 rounded"
      >
        Search Username
      </motion.button>

      <div className="mt-6 space-y-2">

        {results.map((r, index) => (
          <div key={index} className="bg-black p-3 rounded">

            <span className="text-green-400">{r.site}</span> :

            <a
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 ml-2"
            >
              {r.link}
            </a>

          </div>
        ))}

      </div>

    </div>
  );
};

export default UsernameHunter;