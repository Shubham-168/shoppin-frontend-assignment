import React from "react";
import "../styles/SizeSelection.css";

function SizeSelection({ setSelectedSize }) {
  const sizes = ["42mm", "46mm"];

  return (
    <div className="size-selection">
      <h2>Choose Your Size</h2>
      <div className="size-options">
        {sizes.map((size, index) => (
          <button
            key={index}
            onClick={() => setSelectedSize(size)}
            className="size-btn"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelection;
