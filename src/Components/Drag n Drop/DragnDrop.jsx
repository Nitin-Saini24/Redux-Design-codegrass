import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Tool from "./Tool";
import DropArea from "./DropArea";
import Container from "./ShowContainer";

export default function DragnDrop() {
  const [toolsInContainer, setToolsInContainer] = useState([]);

  const handleDropTool = (tool) => {
    setToolsInContainer((prevTools) => [...prevTools, tool]);
  };

  const tools = ["Hammer", "Wrench", "Screwdriver", "Pliers"];

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>Available Tools</h3>
          {tools.map((tool) => (
            <Tool key={tool} tool={tool} />
          ))}
        </div>
        <DropArea onDropTool={handleDropTool} />
        <Container tools={toolsInContainer} />
      </div>
    </DndProvider>
  );
}
