import React from "react";
import { useDrop } from "react-dnd";
import DraggableFile from "./DraggableFile.jsx"; // A new component for draggable files

const DropTarget = ({ files, onFileDrop, onFileMove, onFileDelete }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "FILE",
    drop: (item) => onFileDrop(item.file),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  //   console.log(files, "dropTarget");

  // Filter out undefined or null files before rendering
  const validFiles = files.filter((file) => file !== undefined);

  return (
    <div
      ref={drop}
      className="w-full"
      style={{
        padding: "20px",
        border: "2px dashed gray",
        backgroundColor: isOver ? "lightgreen" : "white",
      }}
    >
      {validFiles.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {validFiles.map((file, index) => (
            <DraggableFile
              key={`${file.id}-${index}`} // Ensure unique key
              file={file}
              index={index}
              onFileMove={onFileMove}
              onFileDelete={onFileDelete}
            />
          ))}
        </ul>
      ) : (
        <p>Drop files here</p>
      )}
    </div>
  );
};

export default DropTarget;
