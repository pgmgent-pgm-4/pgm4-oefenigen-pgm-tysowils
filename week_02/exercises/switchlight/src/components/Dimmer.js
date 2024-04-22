import React from "react";

export default function Dimmer({ dimPercentage, setDimPercentage }) {
  function handleChangeRange(event) {
    setDimPercentage(event.target.value);
  }
  return (
    <div>
      <input
        type="range"
        id="dimmer"
        min="0"
        max="100"
        step="1"
        value={dimPercentage}
        onChange={handleChangeRange}
      />
      <label htmlFor="dimmer">Dimmer</label>
    </div>
  );
}
