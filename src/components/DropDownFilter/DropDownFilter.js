import React, { useState, useEffect } from 'react';
import arrData from './makes.json';
console.log(arrData);

function DropdownFilter() {
  const [values, setValues] = useState([]);
  useEffect(() => {
    setValues(arrData);
  }, []);

  return (
    <select>
      <option value="" disabled selected>
        Enter the text{' '}
      </option>{' '}
      {values.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default DropdownFilter;
