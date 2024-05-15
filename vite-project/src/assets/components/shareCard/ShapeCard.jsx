import React from "react";
import Circle from "../../shapes/Circle";
import Square from "../../shapes/Square";
import Rectangle from "../../shapes/Rectangle";

const ShapeCard = () => {
  return (
    <div className="shape-card" key={shape.id}>
      {(shape.shape === "circle" && <Circle color={shape.color} />) ||
        (shape.shape === "square" && <Square color={shape.color} />) ||
        (shape.shape === "rectangle" && <Rectangle color={shape.color} />)}
    </div>
  );
};

export default ShapeCard;
