import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import RedTeam from "./pages/RedTeam";
import BlueTeam from "./pages/BlueTeam";
import OSINT from "./pages/OSINT";
import Reports from "./pages/Reports";

function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/redteam" element={<RedTeam />} />

        <Route path="/blueteam" element={<BlueTeam />} />

        <Route path="/osint" element={<OSINT />} />

        <Route path="/reports" element={<Reports />} />

      </Routes>

    </Router>

  );

}

export default App;