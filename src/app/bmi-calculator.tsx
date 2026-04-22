"use client";

import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState<number | string>("");
  const [weight, setWeight] = useState<number | string>("");
  const [bmi, setBmi] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = Number(height) / 100;
      const bmiValue = Number(weight) / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setStatus("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setStatus("Overweight");
      } else {
        setStatus("Obesity");
      }
    } else {
      setBmi(null);
      setStatus(null);
    }
  };

  const resetFields = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setStatus(null);
  };

  return (
    <div className="card">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label htmlFor="height">Height (cm):</label>
        <input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="e.g., 175"
        />
      </div>
      <div className="input-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="e.g., 70"
        />
      </div>
      <div className="buttons">
        <button type="button" onClick={calculateBmi}>
          Calculate BMI
        </button>
        <button type="button" onClick={resetFields}>
          Reset
        </button>
      </div>
      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <h3>Status: {status}</h3>
        </div>
      )}
    </div>
  );
}
