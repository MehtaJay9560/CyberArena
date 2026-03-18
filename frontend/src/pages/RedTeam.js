import React, { useState } from "react";
import { motion } from "framer-motion";
import AIExplainer from "../components/AIExplainer";
import HackerTerminal from "../components/HackerTerminal";
import LiveConsole from "../components/LiveConsole";
import ReportGenerator from "../components/ReportGenerator";
import VulnerabilityScanner from "../components/VulnerabilityScanner";
import PortScanner from "../components/PortScanner";
import SubdomainScanner from "../components/SubdomainScanner";
import DashboardLayout from "../layout/DashboardLayout";
import WebsiteRecon from "../components/WebsiteRecon";
import UsernameHunter from "../components/UsernameHunter";
import MetadataExtractor from "../components/MetadataExtractor";
import TechStackDetector from "../components/TechStackDetector";
import SecurityHeaders from "../components/SecurityHeaders";
import ReconGraph from "../components/ReconGraph";
import { FaSkull, FaTerminal, FaSearch, FaBug, FaNetworkWired, FaSitemap, FaUser, FaFileCode, FaServer, FaShieldAlt, FaProjectDiagram } from "react-icons/fa";

const tools = [
  { name: "AI Explainer", key: "ai", icon: FaSkull },
  { name: "Hacker Terminal", key: "terminal", icon: FaTerminal },
  { name: "Live Scan Console", key: "console", icon: FaSearch },
  { name: "Report Generator", key: "report", icon: FaFileCode },
  { name: "Vulnerability Scanner", key: "vuln", icon: FaBug },
  { name: "Port Scanner", key: "ports", icon: FaNetworkWired },
  { name: "Subdomain Scanner", key: "subdomain", icon: FaSitemap },
  { name: "Website Recon", key: "recon", icon: FaSearch },
  { name: "Username Hunter", key: "username", icon: FaUser },
  { name: "Metadata Extractor", key: "meta", icon: FaFileCode },
  { name: "Tech Stack Detector", key: "tech", icon: FaServer },
  { name: "Security Headers", key: "headers", icon: FaShieldAlt },
  { name: "Recon Graph", key: "graph", icon: FaProjectDiagram }
];

const RedTeam = () => {
  const [activeTool, setActiveTool] = useState(null);

  const renderTool = () => {
    switch (activeTool) {
      case "ai":
        return <AIExplainer />;
      case "terminal":
        return <HackerTerminal />;
      case "console":
        return <LiveConsole />;
      case "report":
        return <ReportGenerator />;
      case "vuln":
        return <VulnerabilityScanner />;
      case "ports":
        return <PortScanner />;
      case "subdomain":
        return <SubdomainScanner />;
      case "recon":
        return <WebsiteRecon />;
      case "username":
        return <UsernameHunter />;
      case "meta":
        return <MetadataExtractor />;
      case "tech":
        return <TechStackDetector />;
      case "headers":
        return <SecurityHeaders />;
      case "graph":
        return <ReconGraph />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8" data-testid="redteam-page">
        <div className="border-l-4 border-glitch-red pl-6" data-testid="redteam-header">
          <h1 className="text-5xl lg:text-7xl font-bold text-glitch-red text-shadow-neon-red mb-3 uppercase tracking-tight" data-testid="redteam-title">
            &gt; RED TEAM TOOLKIT
          </h1>
          <p className="text-gray-400 text-lg font-mono tracking-wider" data-testid="redteam-subtitle">
            [OFFENSIVE_SECURITY_OPERATIONS]
          </p>
        </div>

        {activeTool && (
          <div className="mb-6" data-testid="active-tool-container">
            <button
              onClick={() => setActiveTool(null)}
              className="mb-4 px-6 py-2 bg-glitch-red/10 border border-glitch-red text-glitch-red hover:bg-glitch-red hover:text-black transition-all duration-200 uppercase font-bold tracking-wider clip-angular"
              data-testid="back-button"
            >
              &lt; BACK TO TOOLS
            </button>
          </div>
        )}

        {!activeTool && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" data-testid="tools-grid">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.key}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTool(tool.key)}
                  className="relative bg-black/40 border border-glitch-red/30 hover:border-glitch-red hover:shadow-neon-red p-6 clip-angular cursor-pointer group overflow-hidden transition-all duration-300"
                  data-testid={`tool-${tool.key}`}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-glitch-red opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-glitch-red opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="text-2xl text-glitch-red group-hover:animate-pulse" />
                    <h2 className="text-lg font-bold text-glitch-red uppercase tracking-wide">{tool.name}</h2>
                  </div>

                  <p className="text-gray-500 font-mono text-xs uppercase">&gt; CLICK TO LAUNCH</p>

                  <div className="mt-4 text-[10px] font-mono text-gray-700">
                    STATUS: <span className="text-neon-green">READY</span>
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
          <div className="mt-12 p-4 bg-black/60 border border-glitch-red/20 font-mono text-xs text-gray-600" data-testid="redteam-footer">
            <div className="flex justify-between items-center">
              <div>&gt; ATTACK_MODE: <span className="text-glitch-red">ACTIVE</span></div>
              <div>&gt; TOOLS_LOADED: {tools.length}</div>
              <div>&gt; TARGET_STATUS: <span className="text-hacker-yellow">SCANNING</span></div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default RedTeam;