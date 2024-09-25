import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = "TOOL";

const DropArea = ({ onDropTool }) => {
  const [, drop] = useDrop({
    accept: ItemType,
    drop: (item) => onDropTool(item.tool),
  });

  return (
    <div
      ref={drop}
      style={{
        minHeight: "150px",
        backgroundColor: "#e0e0e0",
        padding: "16px",
        border: "2px dashed #aaa",
      }}
    >
      Drop Tools Here
    </div>
  );
};

export default DropArea;
