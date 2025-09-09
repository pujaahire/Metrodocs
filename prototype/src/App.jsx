import React, { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import MetricsPanel from "./components/MetricsPanel";
import ActionButtons from "./components/ActionButtons";
import UploadSection from "./components/UploadSection";
import AISummarizeSection from "./components/AISummarizeSection";
import AllDocuments from "./components/AllDocuments";

function App() {
  const [activeSection, setActiveSection] = useState("upload");

  const containerStyle = {
    maxWidth: "1200px",
    margin: "100px 300px",
    padding: "20px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
  };

  return (
    <div style={containerStyle}>
      <DashboardHeader />
      <MetricsPanel />
      <ActionButtons
        onUploadClick={() => setActiveSection("upload")}
        onSummarizeClick={() => setActiveSection("summarize")}
        onAllDocsClick={() => setActiveSection("documents")}
      />

      {activeSection === "upload" && <UploadSection />}
      {activeSection === "summarize" && <AISummarizeSection />}
      {activeSection === "documents" && <AllDocuments />}
    </div>
  );
}

export default App;