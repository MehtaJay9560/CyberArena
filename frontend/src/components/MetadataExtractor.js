import React, { useState } from "react";
import { motion } from "framer-motion";

const MetadataExtractor = () => {

  const [fileInfo, setFileInfo] = useState(null);

  const handleFile = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const info = {
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      type: file.type,
      lastModified: new Date(file.lastModified).toLocaleString()
    };

    setFileInfo(info);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-10">

      <h2 className="text-2xl font-bold mb-4 text-yellow-400">
        Metadata Extractor
      </h2>

      <input
        type="file"
        onChange={handleFile}
        className="mb-4"
      />

      {fileInfo && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-black p-4 rounded text-green-400"
        >
          <p>File Name: {fileInfo.name}</p>
          <p>File Size: {fileInfo.size}</p>
          <p>File Type: {fileInfo.type}</p>
          <p>Last Modified: {fileInfo.lastModified}</p>
        </motion.div>
      )}

    </div>
  );
};

export default MetadataExtractor;