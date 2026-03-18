import React, { useState } from "react";
import ForceGraph2D from "react-force-graph-2d";

const ReconGraph = () => {

  const [domain, setDomain] = useState("");
  const [graphData, setGraphData] = useState(null);

  const generateGraph = () => {

    if (!domain) return;

    const nodes = [
      { id: domain },
      { id: "api." + domain },
      { id: "dev." + domain },
      { id: "shop." + domain },
      { id: "auth." + domain },
      { id: "cdn." + domain }
    ];

    const links = nodes.slice(1).map(node => ({
      source: domain,
      target: node.id
    }));

    setGraphData({
      nodes,
      links
    });

  };

  return (

    <div className="bg-gray-900 p-6 rounded border border-gray-800">

      <h2 className="text-xl mb-4 text-red-400">
        Recon Attack Surface Map
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
          onClick={generateGraph}
          className="bg-red-600 px-6 py-3 rounded hover:bg-red-700"
        >
          Scan
        </button>

      </div>

      {graphData && (

        <div style={{ height: "400px" }}>

          <ForceGraph2D
            graphData={graphData}
            nodeLabel="id"
            nodeAutoColorBy="id"
          />

        </div>

      )}

    </div>

  );

};

export default ReconGraph;