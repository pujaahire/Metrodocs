import React from "react";

function MetricsPanel() {
  const styles = {
    panel: {
      display: "flex",
      gap: "20px",
      marginTop: "20px",
      marginBottom: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    metricBox: {
      backgroundColor: "#ffffff",
      padding: "15px 20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      textAlign: "center",
      width: "150px",
    },
    label: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "8px",
    },
    number: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#003366",
    },
  };

  return (
    <div style={styles.panel}>
      <div style={styles.metricBox}>
        <div style={styles.label}>Total Documents :</div>
        <div style={styles.number}>260</div>
      </div>
      <div style={styles.metricBox}>
        <div style={styles.label}>Processed Today :</div>
        <div style={styles.number}>15</div>
      </div>
      <div style={styles.metricBox}>
        <div style={styles.label}>Departments :</div>
        <div style={styles.number}>6</div>
      </div>
      <div style={styles.metricBox}>
        <div style={styles.label}>Processing :</div>
        <div style={styles.number}>2</div>
      </div>
    </div>
  );
}

export default MetricsPanel;