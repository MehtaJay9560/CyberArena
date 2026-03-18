import React, { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "../layout/DashboardLayout";
import ThreatMonitor from "../components/ThreatMonitor";
import LogAnalyzer from "../components/LogAnalyzer";
import FirewallMonitor from "../components/FirewallMonitor";
import IncidentResponse from "../components/IncidentResponse";
import { FaShieldAlt, FaFileAlt, FaFire, FaBell } from "react-icons/fa";

const tools = [
  { name: "Threat Monitor", key: "threat", icon: FaBell },
  { name: "Log Analyzer", key: "logs", icon: FaFileAlt },
  { name: "Firewall Monitor", key: "firewall", icon: FaFire },
  { name: "Incident Response", key: "incident", icon: FaShieldAlt }
];

const BlueTeam = () => {
  const [activeTool, setActiveTool] = useState(null);

  const renderTool = () => {
    switch (activeTool) {
      case "threat":
        return <ThreatMonitor />;
      case "logs":
        return <LogAnalyzer />;
      case "firewall":
        return <FirewallMonitor />;
      case "incident":
        return <IncidentResponse />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8" data-testid="blueteam-page">
        <div className="border-l-4 border-cyber-cyan pl-6" data-testid="blueteam-header">
          <h1 className="text-5xl lg:text-7xl font-bold text-cyber-cyan text-shadow-neon-cyan mb-3 uppercase tracking-tight" data-testid="blueteam-title">
            &gt; BLUE TEAM DEFENSE
          </h1>
          <p className="text-gray-400 text-lg font-mono tracking-wider" data-testid="blueteam-subtitle">
            [DEFENSIVE_SECURITY_CENTER]
          </p>
        </div>

        {activeTool && (
          <div className="mb-6" data-testid="active-tool-container">
            <button
              onClick={() => setActiveTool(null)}
              className="mb-4 px-6 py-2 bg-cyber-cyan/10 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all duration-200 uppercase font-bold tracking-wider clip-angular"
              data-testid="back-button"
            >
              &lt; BACK TO TOOLS
            </button>
          </div>
        )}

        {!activeTool && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="tools-grid">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.key}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTool(tool.key)}
                  className="relative bg-black/40 border border-cyber-cyan/30 hover:border-cyber-cyan hover:shadow-neon-cyan p-6 clip-angular cursor-pointer group overflow-hidden transition-all duration-300"
                  data-testid={`tool-${tool.key}`}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="text-2xl text-cyber-cyan group-hover:animate-pulse" />
                    <h2 className="text-lg font-bold text-cyber-cyan uppercase tracking-wide">{tool.name}</h2>
                  </div>

                  <p className="text-gray-500 font-mono text-xs uppercase">&gt; CLICK TO LAUNCH</p>

                  <div className="mt-4 text-[10px] font-mono text-gray-700">
                    STATUS: <span className="text-neon-green">ONLINE</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="mt-10" data-testid="tool-display">
          {renderTool()}
        </div>

        {!activeTool && (
          <div className="mt-12 p-4 bg-black/60 border border-cyber-cyan/20 font-mono text-xs text-gray-600" data-testid="blueteam-footer">
            <div className="flex justify-between items-center">
              <div>&gt; DEFENSE_MODE: <span className="text-cyber-cyan">ACTIVE</span></div>
              <div>&gt; TOOLS_LOADED: {tools.length}</div>
              <div>&gt; THREATS_BLOCKED: <span className="text-neon-green">1,247</span></div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default BlueTeam;