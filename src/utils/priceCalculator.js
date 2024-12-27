export default function calculatePrice(selectedCase, selectedSize, selectedBand) {
    let price = 0;
  
    if (selectedCase) {
      if (selectedCase === "Aluminum") price += 399;
      if (selectedCase === "Stainless Steel") price += 699;
      if (selectedCase === "Titanium") price += 899;
    }
  
    if (selectedSize) {
      if (selectedSize === "42mm") price += 0;
      if (selectedSize === "46mm") price += 50;
    }
  
    if (selectedBand) {
      if (selectedBand.type === "Solo Loop") price += 49;
      if (selectedBand.type === "Braided Solo Loop") price += 99;
    }
  
    return price;
  }
  