import React, { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { FaFileAlt, FaDownload, FaEye, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const Reports = () => {
  const [reports] = useState([
    {
      id: 1,
      name: "Vulnerability Assessment Report",
      date: "2026-01-15",
      type: "Security Audit",
      status: "Critical",
      size: "2.4 MB"
    },
    {
      id: 2,
      name: "Penetration Test Results",
      date: "2026-01-14",
      type: "Red Team",
      status: "High",
      size: "1.8 MB"
    },
    {
      id: 3,
      name: "OSINT Intelligence Gathering",
      date: "2026-01-13",
      type: "OSINT",
      status: "Medium",
      size: "3.2 MB"
    },
    {
      id: 4,
      name: "Firewall Log Analysis",
      date: "2026-01-12",
      type: "Blue Team",
      status: "Low",
      size: "5.1 MB"
    }
  ]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "critical":
        return "glitch-red";
      case "high":
        return "hacker-yellow";
      case "medium":
        return "cyber-cyan";
      case "low":
        return "neon-green";
      default:
        return "gray-400";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8" data-testid="reports-page">
        <div className="border-l-4 border-hacker-yellow pl-6" data-testid="reports-header">
          <h1 className="text-5xl lg:text-7xl font-bold text-hacker-yellow mb-3 uppercase tracking-tight" data-testid="reports-title">
            &gt; SECURITY REPORTS
          </h1>
          <p className="text-gray-400 text-lg font-mono tracking-wider" data-testid="reports-subtitle">
            [GENERATED_INTELLIGENCE_REPORTS]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-testid="stats-section">
          <div className="bg-black/40 border border-glitch-red/30 p-4 clip-angular">
            <div className="text-xs text-gray-500 uppercase mb-1">Total Reports</div>
            <div className="text-3xl font-bold text-glitch-red">{reports.length}</div>
          </div>
          <div className="bg-black/40 border border-hacker-yellow/30 p-4 clip-angular">
            <div className="text-xs text-gray-500 uppercase mb-1">High Priority</div>
            <div className="text-3xl font-bold text-hacker-yellow">2</div>
          </div>
          <div className="bg-black/40 border border-cyber-cyan/30 p-4 clip-angular">
            <div className="text-xs text-gray-500 uppercase mb-1">This Week</div>
            <div className="text-3xl font-bold text-cyber-cyan">4</div>
          </div>
          <div className="bg-black/40 border border-neon-green/30 p-4 clip-angular">
            <div className="text-xs text-gray-500 uppercase mb-1">Total Size</div>
            <div className="text-3xl font-bold text-neon-green">12.5 MB</div>
          </div>
        </div>

        <div className="space-y-4" data-testid="reports-list">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-black/40 border border-neon-green/30 hover:border-neon-green p-6 clip-angular group transition-all duration-300"
              data-testid={`report-${report.id}`}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <FaFileAlt className="text-3xl text-neon-green" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-neon-green uppercase tracking-wide mb-1">{report.name}</h3>
                    <div className="flex gap-4 text-xs font-mono text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaClock /> {report.date}
                      </span>
                      <span>&gt; TYPE: {report.type}</span>
                      <span>&gt; SIZE: {report.size}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`px-3 py-1 border border-${getStatusColor(report.status)}/50 text-${getStatusColor(report.status)} text-xs font-bold uppercase tracking-wider`}>
                    {report.status}
                  </div>
                  <button 
                    className="p-2 bg-neon-green/10 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all"
                    data-testid={`view-report-${report.id}`}
                  >
                    <FaEye />
                  </button>
                  <button 
                    className="p-2 bg-cyber-cyan/10 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all"
                    data-testid={`download-report-${report.id}`}
                  >
                    <FaDownload />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-4 bg-black/60 border border-hacker-yellow/20 font-mono text-xs text-gray-600" data-testid="reports-footer">
          <div className="flex justify-between items-center">
            <div>
              &gt; REPORT_STATUS: <span className="text-neon-green">AVAILABLE</span>
            </div>
            <div>
              &gt; LAST_GENERATED: {new Date().toLocaleString()}
            </div>
            <div>
              &gt; AUTO_EXPORT: <span className="text-cyber-cyan">ENABLED</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;