// File: PdfViewer.js
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pdfjs } from "pdfjs-dist";

// Set the workerSrc property for pdfjs
// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`;

const PdfViewer = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setPdfFile(URL.createObjectURL(file));
    },
  });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed gray",
          padding: "20px",
          width: "300px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop a PDF file here, or click to select one</p>
      </div>
      {pdfFile && (
        <div style={{ marginTop: "20px", height: "800px" }}>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={pdfFile} />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
