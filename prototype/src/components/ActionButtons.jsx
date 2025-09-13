import React from "react";

import uploadIcon from "../assets/upload.png";
import summarizeIcon from "../assets/brain.png";
import allDocsIcon from "../assets/database.png";
import importantIcon from "../assets/document.png"; 

function ActionButtons({ onUploadClick, onSummarizeClick, onAllDocsClick }) {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "15px",
      marginBottom: "20px",
    },
    button: {
      padding: "14px 0",
      backgroundColor: "#e6f0ff",
      color: "#003366",
      border: "1px solid #cce0ff",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "500",
      width: "100%",
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={onUploadClick}>Upload & Store</button>
      <button style={styles.button} onClick={onSummarizeClick}>AI Summarize</button>
      <button style={styles.button} onClick={onAllDocsClick}>All Documents</button>
      <button style={styles.button}>Important Documents</button>
    </div>
  );
}

export default ActionButtons;