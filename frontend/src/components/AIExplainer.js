import React, { useState } from "react";

const AIExplainer = () => {

  const [vuln,setVuln] = useState("");
  const [result,setResult] = useState("");

  const explain = () => {

    const database = {

      xss:`
Cross Site Scripting (XSS) allows attackers to inject malicious scripts.

Risk Level: Medium

Impact:
Session hijacking
Data theft
Website defacement

Fix:
Sanitize inputs
Use CSP headers
Escape HTML output
`,

      sqli:`
SQL Injection allows attackers to manipulate database queries.

Risk Level: Critical

Impact:
Database dump
Login bypass
Data modification

Fix:
Use prepared statements
Input validation
ORM security
`,

      csrf:`
CSRF tricks users into performing unwanted actions.

Risk Level: Medium

Impact:
Account takeover
Unauthorized actions

Fix:
CSRF tokens
SameSite cookies
Origin validation
`

    };

    const key = vuln.toLowerCase();

    if(database[key]){

      setResult(database[key]);

    }
    else{

      setResult("No AI data available");

    }

  };

  return (

    <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500 mt-10">

      <h2 className="text-cyan-400 text-xl mb-4">
        AI Vulnerability Explainer
      </h2>

      <input
        placeholder="Enter vulnerability (XSS, SQLi, CSRF)"
        className="bg-gray-950 p-3 rounded w-full mb-4"
        value={vuln}
        onChange={(e)=>setVuln(e.target.value)}
      />

      <button
        onClick={explain}
        className="bg-cyan-600 px-5 py-2 rounded hover:bg-cyan-500"
      >
        Explain
      </button>

      <div className="bg-black text-green-400 font-mono p-4 rounded mt-6 whitespace-pre-line">

        {result}

      </div>

    </div>

  );

};

export default AIExplainer;