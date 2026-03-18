import React from "react";
import jsPDF from "jspdf";

const ReportGenerator = () => {

  const generateReport = () => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("CyberArena Security Report", 20, 20);

    doc.setFontSize(12);

    doc.text("Target: example.com", 20, 40);

    doc.text("Subdomains Found:", 20, 60);
    doc.text("- api.example.com", 25, 70);
    doc.text("- dev.example.com", 25, 80);

    doc.text("Open Ports:", 20, 100);
    doc.text("- 80 OPEN", 25, 110);
    doc.text("- 443 OPEN", 25, 120);

    doc.text("Detected Vulnerabilities:", 20, 140);
    doc.text("- Missing Security Headers", 25, 150);
    doc.text("- Outdated jQuery Version", 25, 160);

    doc.save("cyberarena_report.pdf");
  };

  return (

    <div className="bg-gray-900 p-6 rounded border border-gray-800">

      <h2 className="text-xl text-cyan-400 mb-4">
        Security Report Generator
      </h2>

      <button
        onClick={generateReport}
        className="bg-cyan-600 px-6 py-3 rounded hover:bg-cyan-700"
      >
        Generate PDF Report
      </button>

    </div>

  );

};

export default ReportGenerator;