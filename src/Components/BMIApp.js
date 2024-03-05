import React, { useState } from 'react';
import InputField from './InputField';
import BMIResult from './BMIResult';

function BMIApp() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
      setBMI(bmiValue);
    }
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <InputField label="Weight (kg)" value={weight} onChange={handleWeightChange} />
      <InputField label="Height (cm)" value={height} onChange={handleHeightChange} />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <BMIResult bmi={bmi} />}
    </div>
  );
}

export default BMIApp;