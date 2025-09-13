// import React, { useState, useRef } from "react";

// function UploadSection() {
//   const [files, setFiles] = useState([]);
//   const fileInputRef = useRef(null);

//   const styles = {
//     container: {
//       border: "2px dashed #ccc",
//       padding: "30px",
//       textAlign: "center",
//       backgroundColor: "#ffffff",
//       borderRadius: "10px",
//       boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
//       marginTop: "30px",
//     },
//     instruction: {
//       fontSize: "18px",
//       color: "#070707",
//       marginBottom: "8px",
//     },
//     subtext: {
//       fontSize: "14px",
//       color: "#666",
//       marginBottom: "20px",
//     },
//     button: {
//       padding: "12px 20px",
//       backgroundColor: "#e6f0ff",
//       color: "#003366",
//       border: "1px solid #cce0ff",
//       borderRadius: "6px",
//       cursor: "pointer",
//       fontSize: "14px",
//       fontWeight: "500",
//     },
//     hiddenInput: {
//       display: "none",
//     },
//     fileList: {
//       marginTop: "15px",
//       textAlign: "left",
//     },
//   };

//   const handleFileChange = (e) => {
//     setFiles(Array.from(e.target.files));
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <div style={styles.container}>
//       <p style={styles.instruction}>Upload documents here or click to browse</p>
//       <p style={styles.subtext}>Supports PDF, JPEG, PNG files up to 50MB each</p>
//       <button style={styles.button} onClick={triggerFileInput}>📁 Choose Files</button>
//       <input
//         type="file"
//         multiple
//         ref={fileInputRef}
//         style={styles.hiddenInput}
//         onChange={handleFileChange}
//       />
//       {files.length > 0 && (
//         <div style={styles.fileList}>
//           <strong>Selected files:</strong>
//           <ul>
//             {files.map((file, index) => (
//               <li key={index}>{file.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UploadSection;




import React from "react";
import uploadIcon from "../assets/upload.png";

function UploadSection() {
  return (
    <div
      style={{
        border: "2px dashed #007bff",
        borderRadius: "10px",
        padding: "40px",
        textAlign: "center",
        background: "white",
      }}
    >
      <img src={uploadIcon} alt="Upload" width="30" />
      <h3>Upload documents here or click to browse</h3>
      <p style={{ color: "#777", fontSize: "14px" }}>
        Supports PDF, JPEG, PNG files up to 50MB each
      </p>
    </div>
  );
}

export default UploadSection;
