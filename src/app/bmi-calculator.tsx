"use client";

import { useState } from "react";
import { Calculator, Ruler, Weight, RefreshCcw } from "lucide-react";

export default function BMICalculator() {
  const [height, setHeight] = useState<number | string>("");
  const [weight, setWeight] = useState<number | string>("");
  const [bmi, setBmi] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = Number(height) / 100;
      const bmiValue = Number(weight) / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setStatus("Normal");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setStatus("Overweight");
      } else {
        setStatus("Obesity");
      }
    }
  };

  const resetFields = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setStatus(null);
  };

  const getStatusClass = (status: string | null) => {
    switch (status) {
      case "Underweight": return "status-underweight";
      case "Normal": return "status-normal";
      case "Overweight": return "status-overweight";
      case "Obesity": return "status-obesity";
      default: return "";
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '12px', borderRadius: '16px' }}>
            <Calculator size={32} color="#6366f1" />
        </div>
      </div>
      <h1>BMI Calculator</h1>
      <p className="subtitle">Enter your details below to calculate your Body Mass Index</p>
      
      <div className="input-group">
        <label htmlFor="height">Height (cm)</label>
        <div className="input-wrapper">
            <Ruler className="input-icon" size={20} />
            <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="175"
            />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="weight">Weight (kg)</label>
        <div className="input-wrapper">
            <Weight className="input-icon" size={20} />
            <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="70"
            />
        </div>
      </div>

      <div className="buttons">
        <button className="primary" type="button" onClick={calculateBmi}>
          Calculate BMI
        </button>
        <button className="secondary" type="button" onClick={resetFields}>
          <RefreshCcw size={18} />
          Reset
        </button>
      </div>

      {bmi && (
        <div className="result-card">
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)' }}>YOUR BMI IS</p>
          <div className="bmi-value">{bmi}</div>
          <div className={`bmi-status ${getStatusClass(status)}`}>
            {status}
          </div>
        </div>
      )}
    </div>
  );
}
