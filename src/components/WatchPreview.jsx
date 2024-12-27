import React from "react";
import "../styles/WatchPreview.css";

function WatchPreview({ selectedCase, selectedSize, selectedBand }) {
  return (
    <div className="watch-preview">
      <h2>Your Watch Preview</h2>
      <div className="preview-container">
        <div className="watch-image">
          <p>{selectedCase || "No Case Selected"}</p>
          <p>{selectedSize || "No Size Selected"}</p>
          <p>{selectedBand ? `${selectedBand.type} - ${selectedBand.color}` : "No Band Selected"}</p>
        </div>
      </div>
    </div>
  );
}

export default WatchPreview;
