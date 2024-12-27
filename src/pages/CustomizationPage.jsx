import React, { useState } from "react";
import CaseSelection from "../components/CaseSelection";
import SizeSelection from "../components/SizeSelection";
import BandSelection from "../components/BandSelection";
import CollectionSwitch from "../components/CollectionSwitch";
import WatchPreview from "../components/WatchPreview";
import PriceDisplay from "../components/PriceDisplay";
import "../styles/CustomizationPage.css";

function CustomizationPage() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState("Series 10");

  return (
    <div className="customization-page">
      <div className="sidebar">
        <CollectionSwitch setSelectedCollection={setSelectedCollection} />
        <CaseSelection setSelectedCase={setSelectedCase} />
        <SizeSelection setSelectedSize={setSelectedSize} />
        <BandSelection setSelectedBand={setSelectedBand} />
      </div>
      <div className="main-content">
        <WatchPreview
          selectedCase={selectedCase}
          selectedSize={selectedSize}
          selectedBand={selectedBand}
        />
        <PriceDisplay
          selectedCase={selectedCase}
          selectedSize={selectedSize}
          selectedBand={selectedBand}
        />
      </div>
    </div>
  );
}

export default CustomizationPage;
