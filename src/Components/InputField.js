import React from 'react';

function InputField({ label, value, onChange }) {
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input
        type="number"
        id={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
