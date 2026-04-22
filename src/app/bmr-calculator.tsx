"use client";

import { useState } from "react";
import { Activity, Ruler, Weight, RefreshCcw, User } from "lucide-react";

export default function BMRCalculator() {
  const [age, setAge] = useState<number | string>("");
  const [height, setHeight] = useState<number | string>("");
  const [weight, setWeight] = useState<number | string>("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [bmr, setBmr] = useState<string | null>(null);

  const calculateBmr = () => {
    if (age && height && weight) {
      const a = Number(age);
      const h = Number(height);
      const w = Number(weight);
      let result: number;

      // Mifflin-St Jeor Equation
      if (gender === "male") {
        result = 10 * w + 6.25 * h - 5 * a + 5;
      } else {
        result = 10 * w + 6.25 * h - 5 * a - 161;
      }

      setBmr(Math.round(result).toString());
    }
  };

  const resetFields = () => {
    setAge("");
    setHeight("");
    setWeight("");
    setGender("male");
    setBmr(null);
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '12px', borderRadius: '16px' }}>
            <Activity size={32} color="#6366f1" />
        </div>
      </div>
      <h1>BMR Calculator</h1>
      <p className="subtitle">Basal Metabolic Rate: calories burned at rest</p>
      
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
        <label htmlFor="age">Age</label>
        <div className="input-wrapper">
            <User className="input-icon" size={20} />
            <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="25"
            />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="height-bmr">Height (cm)</label>
        <div className="input-wrapper">
            <Ruler className="input-icon" size={20} />
            <input
            id="height-bmr"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="175"
            />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="weight-bmr">Weight (kg)</label>
        <div className="input-wrapper">
            <Weight className="input-icon" size={20} />
            <input
            id="weight-bmr"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="70"
            />
        </div>
      </div>

      <div className="buttons">
        <button className="primary" type="button" onClick={calculateBmr}>
          Calculate BMR
        </button>
        <button className="secondary" type="button" onClick={resetFields}>
          <RefreshCcw size={18} />
          Reset
        </button>
      </div>

      {bmr && (
        <div className="result-card">
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)' }}>YOUR DAILY BMR IS</p>
          <div className="bmi-value">{bmr} <span style={{ fontSize: '20px' }}>kcal</span></div>
          <div className="bmi-status status-normal">
            Maintenance Calories
          </div>
        </div>
      )}
    </div>
  );
}
