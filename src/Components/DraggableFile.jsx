import React from "react";
import { useDrag, useDrop } from "react-dnd";

const DraggableFile = ({ file, index, onFileMove, onFileDelete }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "FILE",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "FILE",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        onFileMove(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <>
      <li
        ref={(node) => drag(drop(node))}
        className={`draggable-item ${
          isDragging ? "draggable-item-dragging" : ""
        }`}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "8px",
          border: "1px solid gray",
          marginBottom: "5px",
          backgroundColor: "white",
          cursor: "move",
        }}
      >
        {file.name}
        <button
          onClick={() => onFileDelete(index)}
          style={{
            marginLeft: "10px",
            color: "red",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default DraggableFile;
