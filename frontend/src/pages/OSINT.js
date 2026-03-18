import React, { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "../layout/DashboardLayout";
import EmailFinder from "../components/EmailFinder";
import PhoneLookup from "../components/PhoneLookup";
import DataBreachCheck from "../components/DataBreachCheck";
import { FaEnvelope, FaPhone, FaExclamationTriangle } from "react-icons/fa";

const tools = [
  { name: "Email Finder", key: "email", icon: FaEnvelope },
  { name: "Phone Lookup", key: "phone", icon: FaPhone },
  { name: "Data Breach Check", key: "breach", icon: FaExclamationTriangle }
];

const OSINT = () => {
  const [activeTool, setActiveTool] = useState(null);

  const renderTool = () => {
    switch (activeTool) {
      case "email":
        return <EmailFinder />;
      case "phone":
        return <PhoneLookup />;
      case "breach":
        return <DataBreachCheck />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8" data-testid="osint-page">
        <div className="border-l-4 border-neon-green pl-6" data-testid="osint-header">
          <h1 className="text-5xl lg:text-7xl font-bold text-neon-green text-shadow-neon-green mb-3 uppercase tracking-tight" data-testid="osint-title">
            &gt; OSINT TOOLS
          </h1>
          <p className="text-gray-400 text-lg font-mono tracking-wider" data-testid="osint-subtitle">
            [OPEN_SOURCE_INTELLIGENCE]
          </p>
        </div>

        {activeTool && (
          <div className="mb-6" data-testid="active-tool-container">
            <button
              onClick={() => setActiveTool(null)}
              className="mb-4 px-6 py-2 bg-neon-green/10 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-200 uppercase font-bold tracking-wider clip-angular"
              data-testid="back-button"
            >
              &lt; BACK TO TOOLS
            </button>
          </div>
        )}

        {!activeTool && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="tools-grid">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.key}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTool(tool.key)}
                  className="relative bg-black/40 border border-neon-green/30 hover:border-neon-green hover:shadow-neon-green p-6 clip-angular cursor-pointer group overflow-hidden transition-all duration-300"
                  data-testid={`tool-${tool.key}`}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="text-2xl text-neon-green group-hover:animate-pulse" />
                    <h2 className="text-lg font-bold text-neon-green uppercase tracking-wide">{tool.name}</h2>
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
          <div className="mt-12 p-4 bg-black/60 border border-neon-green/20 font-mono text-xs text-gray-600" data-testid="osint-footer">
            <div className="flex justify-between items-center">
              <div>
                &gt; INTEL_MODE: <span className="text-neon-green">GATHERING</span>
              </div>
              <div>
                &gt; TOOLS_LOADED: {tools.length}
              </div>
              <div>
                &gt; SOURCES: <span className="text-cyber-cyan">156</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default OSINT;