import React from "react";
import "./Lijst.css";

export default function Lijst({ colors, setColors }) {
  function handleNewColor(event) {
    console.log(event.target.value);
    document.body.style.backgroundColor = event.target.value;
  }
  function addRandomColor() {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColors([...colors, randomColor]);
  }

  function handleDelete(e) {
    const newColors = colors.filter((color, index) => {
      console.log(index, e.target.dataset.key);
      if (index != e.target.dataset.key) return color;
    });
    setColors([...newColors]);
  }

  return (
    <div style={{ margin: "auto" }}>
      {colors.map((color, index) => (
        <div className="container">
          <button
            onClick={handleNewColor}
            style={{ width: "6rem" }}
            value={color}
          >
            {color}
          </button>
          <button data-key={index} onClick={handleDelete}>
            Delete Color
          </button>
        </div>
      ))}
      <div>
        <button onClick={addRandomColor}>Add a random color</button>
      </div>
    </div>
  );
}
