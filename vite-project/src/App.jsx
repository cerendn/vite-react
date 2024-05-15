import React, { useState } from "react";
import "./App.css";

function App() {
  const [shapeList, setShapeList] = useState([]);
  const [shapeForm, setShapeForm] = useState({
    color: "",
    shape: "",
  });
  const getShape = (event) => {
    event.preveventDefault();
    setShapeList((prevShape) => [
      ...prevShape,
      { ...shapeForm, id: Date.now().toString() },
    ]);
  };
  return (
    <>
      <header>
        <div>
          <h1>Custom Shapes</h1>
        </div>
        <div>
          <ul>
            <li>Profile</li>
            <li>Details</li>
            <li>Contacs</li>
          </ul>
        </div>
      </header>
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
        <button onClick={getShape}>Create Shape</button>
        <div className="shape-list">
          {shapeList.map((shape) => {
            <div className="shape-card">
              {shape.shape === "square" && (
                <div
                  style={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: shape.color,
                  }}
                ></div>
              )}
              {shape.shape === "circle" && (
                <div style={{ backgroundColor: shape.color }}></div>
              )}
              {shape.shape === "rectangle" && (
                <div style={{ backgroundColor: shape.color }}></div>
              )}
            </div>;
          })}
        </div>
      </main>
    </>
  );
}

export default App;
