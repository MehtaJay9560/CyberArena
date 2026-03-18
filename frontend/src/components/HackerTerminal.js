import React, { useState } from "react";

const HackerTerminal = () => {

  const [text, setText] = useState("");
  const [running, setRunning] = useState(false);

  const lines = [
    "root@cyberarena:~# Starting reconnaissance",
    "root@cyberarena:~# Gathering DNS information",
    "root@cyberarena:~# Subdomains found: 14",
    "root@cyberarena:~# Scanning ports...",
    "root@cyberarena:~# Open ports: 80, 443, 22",
    "root@cyberarena:~# Detecting vulnerabilities",
    "root@cyberarena:~# CVE match found",
    "root@cyberarena:~# Generating report",
    "root@cyberarena:~# Scan Finished"
  ];

  const startTerminal = () => {

    if(running) return;

    setRunning(true);
    setText("");

    let i = 0;

    const interval = setInterval(() => {

      if(i < lines.length){

        setText(prev => prev + lines[i] + "\n");

        i++;

      }
      else{

        clearInterval(interval);
        setRunning(false);

      }

    },1000);

  };

  return (

    <div className="bg-black border border-green-500 rounded-xl p-6 mt-10">

      <h2 className="text-green-400 text-xl mb-4">
        Hacker Terminal
      </h2>

      <button
        onClick={startTerminal}
        className="bg-green-600 px-5 py-2 rounded hover:bg-green-500 mb-4"
      >
        Run Scan
      </button>

      <div className="bg-gray-950 rounded p-4 h-72 overflow-auto font-mono text-green-400 whitespace-pre-line">

        {text}

        <span className="animate-pulse">
          █
        </span>

      </div>

    </div>

  );

};

export default HackerTerminal;