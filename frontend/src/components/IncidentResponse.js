import React from "react";

const IncidentResponse = () => {

  return (

    <div className="bg-gray-900 p-6 rounded border border-gray-800">

      <h2 className="text-xl text-blue-400 mb-4">
        Incident Response
      </h2>

      <p className="mb-4">
        Use this panel to track active security incidents.
      </p>

      <button className="bg-red-600 px-6 py-3 rounded">
        Create Incident Report
      </button>

    </div>

  );

};

export default IncidentResponse;