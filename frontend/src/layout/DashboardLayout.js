import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaShieldAlt, FaSkullCrossbones, FaShieldVirus, FaEye, FaFileAlt, FaTerminal, FaBars, FaTimes 
} from "react-icons/fa";
import MatrixRain from "../components/MatrixRain";
import Scanlines from "../components/Scanlines";

const DashboardLayout = ({ children }) => {

  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { path: "/", label: "DASHBOARD", icon: FaTerminal, color: "neon-green" },
    { path: "/redteam", label: "RED TEAM", icon: FaSkullCrossbones, color: "glitch-red" },
    { path: "/blueteam", label: "BLUE TEAM", icon: FaShieldVirus, color: "cyber-cyan" },
    { path: "/osint", label: "OSINT", icon: FaEye, color: "neon-green" },
    { path: "/reports", label: "REPORTS", icon: FaFileAlt, color: "hacker-yellow" },
  ];

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-300 relative overflow-hidden">

      {/* Background Effects */}
      <MatrixRain />
      <Scanlines />
      <div className="grid-overlay fixed inset-0 pointer-events-none z-[1]" />

      {/* Layout */}
      <div className="relative z-10 flex min-h-screen">

        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "w-64" : "w-0"
          } bg-[#050505] border-r border-neon-green/20 transition-all duration-300 overflow-hidden flex flex-col fixed left-0 top-0 h-screen z-40`}
          data-testid="sidebar"
        >
          {/* Logo */}
          <div className="p-6 border-b border-neon-green/30">
            <div className="flex items-center gap-3 mb-2">
              <FaShieldAlt className="text-3xl text-neon-green animate-pulse" data-testid="logo-icon" />
              <h1 className="text-2xl font-bold text-neon-green text-shadow-neon-green uppercase tracking-wider" data-testid="app-title">
                CYBERARENA
              </h1>
            </div>
            <div className="text-xs text-gray-500 font-mono tracking-widest" data-testid="app-subtitle">
              &gt; SECURITY_TOOLKIT_v2.4.1
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2" data-testid="nav-menu">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    block p-3 border border-transparent
                    transition-all duration-200 clip-angular
                    font-bold tracking-wider text-sm glitch-hover
                    ${isActive
                      ? `bg-${item.color}/10 border-${item.color} text-${item.color} shadow-${item.color}`
                      : `text-gray-400 hover:bg-${item.color}/5 hover:border-${item.color}/50 hover:text-${item.color}`
                    }
                  `}
                  data-testid={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-lg" />
                    <span>{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-neon-green/30" data-testid="sidebar-footer">
            <div className="text-xs font-mono text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span>&gt; STATUS:</span>
                <span className="text-neon-green">ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span>&gt; UPTIME:</span>
                <span className="text-cyber-cyan">99.8%</span>
              </div>
              <div className="flex justify-between">
                <span>&gt; THREATS:</span>
                <span className="text-glitch-red">247</span>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Sidebar Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-4 left-4 z-50 p-2 bg-black/80 border border-neon-green/50 text-neon-green hover:bg-neon-green/10 transition-all clip-angular"
          data-testid="sidebar-toggle"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Main Content */}
        <div className={`flex-1 p-8 lg:p-12 relative overflow-auto transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"}`} data-testid="main-content">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;