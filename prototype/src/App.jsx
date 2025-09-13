import React from "react";

// Importing assets
import metroLogo from "./assets/rail.jpeg";
import engineeringIcon from "./assets/engineericon.png";
import hrIcon from "./assets/blacksearch.png";
import procurementIcon from "./assets/procurement.png";
import legalIcon from "./assets/legal.png";
import operationsIcon from "./assets/operations.png";
import financeIcon from "./assets/finance.png";
import databaseIcon from "./assets/database.png";
import brainIcon from "./assets/brain.png";
import documentIcon from "./assets/document.png";
import clockIcon from "./assets/clock.png";
import uploadIcon from "./assets/upload.png";
import departmentIcon from "./assets/department.png";

function App() {
  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", padding: "15px 25px", background: "#fff", borderBottom: "1px solid #ddd" }}>
        <img src={metroLogo} alt="Metro Logo" style={{ width: "50px", marginRight: "10px" }} />
        <div>
          <h2 style={{ margin: 0, color: "#007bff", fontWeight: "bold" }}>METRODOCS</h2>
          <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>KMRL smart document system</p>
        </div>
      </header>

      {/* Navbar with icons + text */}
      <nav style={{ display: "flex", justifyContent: "center", gap: "40px", padding: "15px", background: "#fff", borderBottom: "1px solid #eee" }}>
        <div style={{ textAlign: "center" }}>
          <img src={engineeringIcon} alt="Engineering" style={{ width: "30px" }} />
          <p style={navText}>Engineering</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={hrIcon} alt="HR" style={{ width: "30px" }} />
          <p style={navText}>HR</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={procurementIcon} alt="Procurement" style={{ width: "30px" }} />
          <p style={navText}>Procurement</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={legalIcon} alt="Legal" style={{ width: "30px" }} />
          <p style={navText}>Legal</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={operationsIcon} alt="Operations" style={{ width: "30px" }} />
          <p style={navText}>Operations</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={financeIcon} alt="Finance" style={{ width: "30px" }} />
          <p style={navText}>Finance</p>
        </div>
      </nav>

      {/* Stats Cards */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", padding: "20px" }}>
        <div style={cardStyle}>
          <img src={databaseIcon} alt="Total Docs" style={iconStyle} />
          <p style={cardText}>Total Documents</p>
          <h3 style={cardNumber}>260</h3>
        </div>
        <div style={cardStyle}>
          <img src={documentIcon} alt="Processed" style={iconStyle} />
          <p style={cardText}>Processed Today</p>
          <h3 style={cardNumber}>15</h3>
        </div>
        <div style={cardStyle}>
          <img src={departmentIcon} alt="Departments" style={iconStyle} />
          <p style={cardText}>Departments</p>
          <h3 style={cardNumber}>6</h3>
        </div>
        <div style={cardStyle}>
          <img src={clockIcon} alt="Processing" style={iconStyle} />
          <p style={cardText}>Processing</p>
          <h3 style={cardNumber}>2</h3>
        </div>
      </section>

      {/* Action Buttons */}
      <section style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px" }}>
        <button style={buttonStyle}><img src={uploadIcon} alt="Upload" style={btnIcon} /> Upload & Store</button>
        <button style={buttonStyle}><img src={brainIcon} alt="AI" style={btnIcon} /> AI Summarize</button>
        <button style={buttonStyle}><img src={documentIcon} alt="Docs" style={btnIcon} /> All Documents</button>
        <button style={buttonStyle}><img src={documentIcon} alt="Important" style={btnIcon} /> Important Docs</button>
      </section>

      {/* Upload Box */}
      <section style={{ margin: "30px auto", width: "80%", padding: "40px", border: "2px dashed #007bff", borderRadius: "10px", textAlign: "center", background: "#fff" }}>
        <img src={uploadIcon} alt="Upload" style={{ width: "40px", marginBottom: "10px" }} />
        <p style={{ fontSize: "16px", fontWeight: "500" }}>Upload documents here or click to browse</p>
        <p style={{ fontSize: "12px", color: "#666" }}>Supports PDF, JPEG, PNG files up to 50MB each</p>
      </section>

    </div>
  );
}

// Reusable styles
const navText = { fontSize: "12px", marginTop: "5px", color: "#333" };
const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};
const cardText = { fontSize: "14px", color: "#444", margin: "8px 0 4px" };
const cardNumber = { margin: 0, fontSize: "20px", fontWeight: "bold", color: "#007bff" };
const iconStyle = { width: "25px", marginBottom: "8px" };
const buttonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  background: "#f8f9fa",
  cursor: "pointer",
  fontWeight: "500"
};
const btnIcon = { width: "18px" };

export default App;
