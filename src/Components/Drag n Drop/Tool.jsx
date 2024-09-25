import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = "TOOL";

const Tool = ({ tool }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { tool },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: "8px",
        margin: "4px",
        backgroundColor: "#ccc",
        cursor: "move",
      }}
    >
      {tool}
    </div>
  );
};

export default Tool;
