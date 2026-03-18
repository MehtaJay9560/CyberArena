import React, { useState, useEffect } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import MatrixRain from "../components/MatrixRain";
import Scanlines from "../components/Scanlines";
import OSINTSummary from "../components/OSINTSummary";
import EmailOSINT from "../components/EmailOSINT";
import PhoneLookup from "../components/PhoneLookup";
import DataBreachCheck from "../components/DataBreachCheck";
import IPLookup from "../components/IPLookup";
import WhoisLookup from "../components/WhoisLookup";
import WebsiteRecon from "../components/WebsiteRecon";
import OSINTRecon from "../components/OSINTRecon";

const Dashboard = () => {
  // Live time for system status
  const [time, setTime] = useState(new Date());
  const [emailResult,setEmailResult]=useState({});
const [phoneResult,setPhoneResult]=useState({});
const [breachResult,setBreachResult]=useState({});
const [ipResult,setIpResult]=useState({});
const [domainResult,setDomainResult]=useState({});

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout>
      {/* Background Effects */}
      <MatrixRain />
      <Scanlines />

      <div className="space-y-8">
        {/* Header Section */}
        <div className="relative" data-testid="dashboard-header">
          <div className="border-l-4 border-neon-green pl-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-neon-green text-shadow-neon-green mb-3 uppercase tracking-tight terminal-cursor" data-testid="dashboard-title">
              CYBERARENA DASHBOARD
            </h1>
            <p className="text-gray-400 text-lg font-mono tracking-wider" data-testid="dashboard-subtitle">
              &gt; OFFENSIVE & DEFENSIVE SECURITY TOOLKIT
            </p>
          </div>
          <div className="absolute top-0 right-0 text-xs font-mono text-gray-600" data-testid="system-time">
            <div>SYS_TIME: {time.toLocaleTimeString()}</div>
            <div>ACCESS_LVL: <span className="text-glitch-red">ROOT</span></div>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="quick-access-section">
          {/* RED TEAM */}
          <div className="relative bg-[#050505] border border-glitch-red/30 hover:border-glitch-red transition-all duration-300 p-6 clip-angular group overflow-hidden glitch-hover" data-testid="redteam-card">
            <div className="absolute top-0 left-0 w-full h-1 bg-glitch-red opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-1 h-full bg-glitch-red opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-glitch-red text-2xl font-bold mb-2 uppercase tracking-wider text-shadow-neon-red">&gt; RED TEAM</h2>
            <p className="text-gray-400 font-mono text-sm">ATTACK SURFACE ANALYSIS</p>
            <div className="mt-4 text-xs font-mono text-gray-600">
              <div>ACTIVE_SCANS: 12</div>
              <div>VULNERABILITIES: 47</div>
            </div>
          </div>

          {/* BLUE TEAM */}
          <div className="relative bg-[#050505] border border-cyber-cyan/30 hover:border-cyber-cyan transition-all duration-300 p-6 clip-angular group overflow-hidden glitch-hover" data-testid="blueteam-card">
            <div className="absolute top-0 left-0 w-full h-1 bg-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-1 h-full bg-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-cyber-cyan text-2xl font-bold mb-2 uppercase tracking-wider text-shadow-neon-cyan">&gt; BLUE TEAM</h2>
            <p className="text-gray-400 font-mono text-sm">DEFENSE MONITORING</p>
            <div className="mt-4 text-xs font-mono text-gray-600">
              <div>ACTIVE_RULES: 89</div>
              <div>INCIDENTS: 3</div>
            </div>
          </div>

          {/* OSINT */}
          <div className="relative bg-[#050505] border border-neon-green/30 hover:border-neon-green transition-all duration-300 p-6 clip-angular group overflow-hidden glitch-hover" data-testid="osint-card">
            <div className="absolute top-0 left-0 w-full h-1 bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-1 h-full bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-neon-green text-2xl font-bold mb-2 uppercase tracking-wider text-shadow-neon-green">&gt; OSINT</h2>
            <p className="text-gray-400 font-mono text-sm">OPEN SOURCE INTELLIGENCE</p>
            <div className="mt-4 text-xs font-mono text-gray-600">
              <div>SOURCES: 156</div>
              <div>DATA_POINTS: 2.4K</div>
            </div>
          </div>
        </div>

        {/* OSINT Tools Section */}
        <div className="space-y-6" data-testid="osint-tools-section">
          <div className="border-l-2 border-neon-green pl-4">
            <h2 className="text-neon-green text-3xl font-bold uppercase tracking-wider text-shadow-neon-green" data-testid="osint-section-title">&gt; OSINT TOOLS</h2>
            <div className="text-xs font-mono text-gray-600 mt-1">[INTELLIGENCE_GATHERING_MODULE]</div>
          </div>

          <OSINTSummary
email={emailResult}
phone={phoneResult}
breach={breachResult}
ip={ipResult}
domain={domainResult}
/>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<EmailOSINT setResult={setEmailResult}/>

<PhoneLookup setResult={setPhoneResult}/>

<DataBreachCheck setResult={setBreachResult}/>

<IPLookup setResult={setIpResult}/>

<WhoisLookup setResult={setDomainResult}/>

</div>
        </div>

        {/* Recon Tools Section */}
        <div className="space-y-6" data-testid="recon-tools-section">
          <div className="border-l-2 border-glitch-red pl-4">
            <h2 className="text-glitch-red text-3xl font-bold uppercase tracking-wider text-shadow-neon-red" data-testid="recon-section-title">&gt; RECON TOOLS</h2>
            <div className="text-xs font-mono text-gray-600 mt-1">[RECONNAISSANCE_MODULE]</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <WebsiteRecon />
            <OSINTRecon />
          </div>
        </div>

        {/* System Status Footer */}
        <div className="mt-12 p-4 bg-black/60 border border-neon-green/20 font-mono text-xs text-gray-600" data-testid="system-status">
          <div className="flex justify-between items-center">
            <div>&gt; SYSTEM_STATUS: <span className="text-neon-green">OPERATIONAL</span></div>
            <div>&gt; LAST_SCAN: {time.toLocaleString()}</div>
            <div>&gt; USER: <span className="text-cyber-cyan">ROOT@CYBERARENA</span></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;