import React, { useState } from 'react';

export function MileageRangeInput({ onChange }) {
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleMinMileageChange = event => {
    const minMileageValue = event.target.value;
    setMinMileage(minMileageValue);
    onChange(minMileageValue, maxMileage);
  };

  const handleMaxMileageChange = event => {
    const maxMileageValue = event.target.value;
    setMaxMileage(maxMileageValue);
    onChange(minMileage, maxMileageValue);
  };

  return (
    <div>
      <label htmlFor="minMileage">From</label>
      <input
        type="number"
        id="minMileage"
        value={minMileage}
        onChange={handleMinMileageChange}
      />

      <label htmlFor="maxMileage">To</label>
      <input
        type="number"
        id="maxMileage"
        value={maxMileage}
        onChange={handleMaxMileageChange}
      />
    </div>
  );
}
