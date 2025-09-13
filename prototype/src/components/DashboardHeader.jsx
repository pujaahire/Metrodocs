import React from "react";

function DashboardHeader() {
  const styles = {
    header: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      marginBottom: "20px",
    },
    logo: {
      width: "60px",
      height: "auto",
    },
    title: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#003366",
      margin: 0,
    },
    nav: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginTop: "10px",
    },
    tab: {
      padding: "6px 14px",
      backgroundColor: "#e6f0ff",
      color: "#003366",
      border: "1px solid #cce0ff",
      borderRadius: "4px",
      fontSize: "13px",
      cursor: "pointer",
    },
    activeTab: {
      backgroundColor: "#448ad6",
      fontWeight: "600",
    },
  };

  const tabs = ["Central hub", "Engineering", "HR", "Procurement", "Legal", "Operations", "Finance"];

  return (
    <div>
      <div style={styles.header}>
        <img src="rail.jpeg" alt="Metro Logo"
          style={styles.logo}/>
        
        <h1 style={styles.title}>METRODOCS KMRL Smart Document System</h1>
      </div>
      <nav style={styles.nav}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={{
              ...styles.tab,
              ...(tab === "Central hub" ? styles.activeTab : {}),
            }}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default DashboardHeader;