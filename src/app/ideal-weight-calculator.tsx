"use client";

import { useState } from "react";
import { Scale, Ruler, RefreshCcw, User } from "lucide-react";

export default function IdealWeightCalculator() {
  const [height, setHeight] = useState<number | string>("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [idealWeight, setIdealWeight] = useState<string | null>(null);

  const calculateIdealWeight = () => {
    if (height) {
      const h = Number(height);
      let result: number;
      
      // Using Devine Formula
      // Male: 50kg + 2.3kg * (height in inches - 60)
      // Female: 45.5kg + 2.3kg * (height in inches - 60)
      const heightInInches = h / 2.54;
      const inchesOver5Feet = heightInInches - 60;
      
      if (gender === "male") {
        result = 50 + (2.3 * Math.max(0, inchesOver5Feet));
      } else {
        result = 45.5 + (2.3 * Math.max(0, inchesOver5Feet));
      }
      
      setIdealWeight(result.toFixed(1));
    }
  };

  const resetFields = () => {
    setHeight("");
    setGender("male");
    setIdealWeight(null);
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '12px', borderRadius: '16px' }}>
            <Scale size={32} color="#6366f1" />
        </div>
      </div>
      <h1>Ideal Weight</h1>
      <p className="subtitle">Calculate your ideal body weight based on your height and gender</p>
      
      <div className="input-group">
        <label>Gender</label>
        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <button 
                className={gender === "male" ? "primary" : "secondary"} 
                style={{ padding: '10px' }}
                onClick={() => setGender("male")}
            >
                Male
            </button>
            <button 
                className={gender === "female" ? "primary" : "secondary"} 
                style={{ padding: '10px' }}
                onClick={() => setGender("female")}
            >
                Female
            </button>
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="height-ideal">Height (cm)</label>
        <div className="input-wrapper">
            <Ruler className="input-icon" size={20} />
            <input
            id="height-ideal"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="175"
            />
        </div>
      </div>

      <div className="buttons">
        <button className="primary" type="button" onClick={calculateIdealWeight}>
          Calculate Ideal Weight
        </button>
        <button className="secondary" type="button" onClick={resetFields}>
          <RefreshCcw size={18} />
          Reset
        </button>
      </div>

      {idealWeight && (
        <div className="result-card">
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)' }}>YOUR IDEAL WEIGHT IS</p>
          <div className="bmi-value">{idealWeight} <span style={{ fontSize: '24px' }}>kg</span></div>
          <div className="bmi-status status-normal">
            Healthy Range
          </div>
        </div>
      )}
    </div>
  );
}
