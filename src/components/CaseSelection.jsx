import React from "react";
import "../styles/CaseSelection.css";

function CaseSelection({ setSelectedCase }) {
  const cases = ["Aluminum", "Stainless Steel", "Titanium"];

  return (
    <div className="case-selection">
      <h2>Choose Your Case</h2>
      <div className="case-options">
        {cases.map((caseType, index) => (
          <button
            key={index}
            onClick={() => setSelectedCase(caseType)}
            className="case-btn"
          >
            {caseType}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CaseSelection;
