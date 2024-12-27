import React from "react";
import calculatePrice from "../utils/priceCalculator";
import "../styles/PriceDisplay.css";

function PriceDisplay({ selectedCase, selectedSize, selectedBand }) {
  const totalPrice = calculatePrice(selectedCase, selectedSize, selectedBand);

  return (
    <div className="price-display">
      <h2>Total Price</h2>
      <p>${totalPrice}</p>
    </div>
  );
}

export default PriceDisplay;
