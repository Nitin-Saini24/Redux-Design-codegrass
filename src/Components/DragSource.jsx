import React from "react";
import { useDrag } from "react-dnd";

const DragSource = ({ file }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "FILE",
    item: { file },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isDragging ? "red" : "white",
        padding: "8px",
        border: "1px solid gray",
        marginBottom: "5px",
        cursor: "move",
      }}
    >
      {file.name}
    </div>
  );
};

export default DragSource;
