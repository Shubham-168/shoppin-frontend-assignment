import React from "react";

function CollectionSwitch({ setSelectedCollection }) {
  const collections = ["Series 10", "Hermès", "SE"];

  return (
    <div className="collection-switch">
      <h2>Switch Collection</h2>
      <select
        onChange={(e) => setSelectedCollection(e.target.value)}
        className="collection-dropdown"
      >
        {collections.map((collection, index) => (
          <option key={index} value={collection}>
            {collection}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CollectionSwitch;
