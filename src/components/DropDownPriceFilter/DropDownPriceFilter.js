import React, { useState } from 'react';

export function DropdownPriceFilter({ onChange }) {
  const [selectedPrice, setSelectedPrice] = useState('');
  const handleChange = event => {
    const selectedPrice = event.target.value;
    setSelectedPrice(selectedPrice);
    onChange(selectedPrice);
  };
  const prices = [];
  for (let i = 10; i <= 100; i += 10) {
    prices.push(i);
  }

  return (
    <div>
      <select value={selectedPrice} onChange={handleChange}>
        <option value="">To $</option>
        {prices.map(price => (
          <option key={price} value={price}>{`$${price}`}</option>
        ))}
      </select>
    </div>
  );
}
