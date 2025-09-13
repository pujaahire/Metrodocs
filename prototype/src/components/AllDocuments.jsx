import React from "react";

function AllDocuments() {
  const styles = {
    container: {
      marginTop: "30px",
    },
    searchBar: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
      flexWrap: "wrap",
    },
    input: {
      flex: "1",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    button: {
      padding: "10px 16px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
    row: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    docCard: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      width: "500px",
      flex: "1",
    },
    title: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "8px",
      color: "#003366",
    },
    tags: {
      display: "flex",
      gap: "8px",
      marginBottom: "10px",
      flexWrap: "wrap",
    },
    tag: {
      backgroundColor: "#e0e0e0",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "12px",
      color: "#333",
    },
    summary: {
      fontSize: "14px",
      color: "#333",
      marginBottom: "10px",
    },
    uploader: {
      fontSize: "12px",
      color: "#777",
      marginBottom: "10px",
    },
    actions: {
      display: "flex",
      gap: "10px",
    },
    actionBtn: {
      padding: "8px 12px",
      backgroundColor: "#0055aa",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "13px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchBar}>
        <input type="text" placeholder="Search All Documents" style={styles.input} />
        <button style={styles.button}>Filters</button>
        <button style={styles.button}>Search</button>
      </div>

      <div style={styles.row}>
        {/* English Document */}
        <div style={styles.docCard}>
          <div style={styles.title}>Fire Safety Incident Report – Aluva Station</div>
          <div style={styles.tags}>
            <span style={styles.tag}>Engineering</span>
            <span style={styles.tag}>Safety</span>
            <span style={styles.tag}>Public</span>
          </div>
          <div style={styles.summary}>
            Fire Safety Incident at Aluva Station involving manufacturing site malfunction. Emergency services responded. No injuries reported. Investigation ongoing.
          </div>
          <div style={styles.uploader}>Uploaded by: Pharma Docs</div>
          <div style={styles.actions}>
            <button style={styles.actionBtn}>View Document</button>
            <button style={styles.actionBtn}>View Summary</button>
          </div>
        </div>

        {/* Malayalam Document */}
        <div style={styles.docCard}>
          <div style={styles.title}>മാർച്ച് മാസത്തെ ശമ്പളപത്രം – ഓഫീസ് 2024</div>
          <div style={styles.tags}>
            <span style={styles.tag}>HR</span>
            <span style={styles.tag}>Finance</span>
            <span style={styles.tag}>Confidential</span>
          </div>
          <div style={styles.summary}>
            March 2024 salary statement for HR and office employees, includes breakdown of earnings, deductions, and net payments. All payments processed on time.
          </div>
          <div style={styles.uploader}>Uploaded by: HR Docs</div>
          <div style={styles.actions}>
            <button style={styles.actionBtn}>View Document</button>
            <button style={styles.actionBtn}>View Summary</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllDocuments;