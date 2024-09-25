import React, { useState, useEffect } from "react";
import DragSource from "../Components/DragSource";
import DropTarget from "../Components/DropTarget";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";
import { MultiBackend, TouchTransition } from "react-dnd-multi-backend";

const HTML5AndTouchBackends = {
  backends: [
    {
      id: "html5",
      backend: HTML5Backend, // Desktop (Mouse-based)
      preview: true,
    },
    {
      id: "touch",
      backend: TouchBackend, // Mobile (Touch-based)
      options: { enableMouseEvents: true }, // Enable both touch and mouse events
      transition: TouchTransition, // Defines when to switch to touch
    },
  ],
};

export default function Page4() {
  const [files, setFiles] = useState([]);

  // Load files from local storage when the component mounts
  useEffect(() => {
    const savedFiles = localStorage.getItem("savedFiles");
    if (savedFiles) {
      setFiles(JSON.parse(savedFiles));
    }
  }, []);

  const handleFileDrop = (newFile) => {
    setFiles((prevFiles) => {
      const validFiles = prevFiles.filter((file) => file !== undefined);
      const fileExists = validFiles.some(
        (file) => file?.name === newFile?.name
      );
      if (!fileExists && newFile) {
        return [...validFiles, newFile];
      }
      return validFiles;
    });
  };

  const handleFileMove = (dragIndex, hoverIndex) => {
    setFiles((prevFiles) => {
      const validFiles = prevFiles.filter((file) => file !== undefined);
      if (dragIndex === hoverIndex || !validFiles[dragIndex]) {
        return validFiles;
      }
      const updatedFiles = [...validFiles];
      const draggedFile = updatedFiles[dragIndex];
      if (!draggedFile) return validFiles;
      updatedFiles.splice(dragIndex, 1);
      updatedFiles.splice(hoverIndex, 0, draggedFile);
      return updatedFiles;
    });
  };

  const handleFileDelete = (indexToDelete) => {
    setFiles(files.filter((_, index) => index !== indexToDelete));
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("savedFiles", JSON.stringify(files));
    alert("Files saved to local storage!");
  };

  const availableFiles = [
    { name: "File 1", id: 1 },
    { name: "File 2", id: 2 },
    { name: "File 3", id: 3 },
    { name: "File 4", id: 4 },
    { name: "File 5", id: 5 },
    { name: "File 6", id: 6 },
  ];
  // opt = { enableMouseEvents: true };
  return (
    <DndProvider backend={MultiBackend} options={HTML5AndTouchBackends}>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        {/* Section for dragging files */}
        <div>
          <h3>Drag Files</h3>
          {availableFiles.map((file, index) => (
            <DragSource key={`${file.id}`} file={file} />
          ))}
        </div>

        {/* Section for dropping, sorting, and deleting files */}
        <div>
          <h3>Drop, Sort & Delete Files</h3>
          <DropTarget
            files={files}
            onFileDrop={handleFileDrop}
            onFileMove={handleFileMove}
            onFileDelete={handleFileDelete}
          />
        </div>

        {/* Save button */}
        <button
          onClick={saveToLocalStorage}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Save Sequence
        </button>
      </div>
    </DndProvider>
  );
}
