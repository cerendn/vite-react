import React, { useState } from "react";
import "./App.css";
import Header from "./assets/components/header/Header";
import ShapeCard from "./assets/components/shareCard/ShapeCard";

function App() {
  const [shapeList, setShapeList] = useState([]);
  const [shapeForm, setShapeForm] = useState({
    color: "",
    shape: "",
  });
  const createShape = (event) => {
    event.preventDefault();
    setShapeList((prevShapeList) => [
      ...prevShapeList,
      { ...shapeForm, id: Date.now().toString() },
    ]);
  };
  return (
    <>
      <Header />
      <main>
        <select
          name="color"
          id=""
          onChange={(event) =>
            setShapeForm((prevShape) => ({
              ...prevShape,
              color: event.target.value,
            }))
          }
        >
          <option value="fuchsia">Fuchsia</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <select
          name="shape"
          id=""
          onChange={(event) =>
            setShapeForm((prevShape) => ({
              ...prevShape,
              shape: event.target.value,
            }))
          }
        >
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="rectangle">Rectangle</option>
        </select>
        <button onClick={createShape}>Create Shape</button>
        <div className="shape-list">
          {shapeList.map((shape) => (
            
                 <ShapeCard key={shape.id} />
                ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
