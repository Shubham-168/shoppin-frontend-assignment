import React, { useState } from "react";
import "../styles/BandSelection.css";

function BandSelection({ setSelectedBand }) {
  const bands = [
    { type: "Solo Loop", colors: ["Black", "White", "Blue"] },
    { type: "Braided Solo Loop", colors: ["Red", "Green", "Pink"] },
  ];
  const [activeType, setActiveType] = useState("Solo Loop");

  const handleBandSelect = (color) => {
    setSelectedBand({ type: activeType, color });
  };

  return (
    <div className="band-selection">
      <h2>Choose Your Band</h2>
      <div className="band-types">
        {bands.map((band, index) => (
          <button
            key={index}
            onClick={() => setActiveType(band.type)}
            className={`band-type-btn ${
              band.type === activeType ? "active" : ""
            }`}
          >
            {band.type}
          </button>
        ))}
      </div>
      <div className="band-colors">
        {bands
          .find((band) => band.type === activeType)
          .colors.map((color, index) => (
            <button
              key={index}
              onClick={() => handleBandSelect(color)}
              className={`band-color-btn ${color.toLowerCase()}`}
            >
              {color}
            </button>
          ))}
      </div>
    </div>
  );
}

export default BandSelection;
