"use client";

import BMICalculator from "./bmi-calculator";
import IdealWeightCalculator from "./ideal-weight-calculator";

export default function Home() {
  return (
    <main className="container">
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '12px' }}>Health Calculators</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>
          Track your fitness and health goals with our simple yet powerful tools.
        </p>
      </div>
      
      <div className="calculator-grid">
        <BMICalculator />
        <IdealWeightCalculator />
      </div>

      <footer style={{ marginTop: '40px', color: 'var(--text-muted)', fontSize: '14px' }}>
        © 2026 Health Metrics Pro. All rights reserved.
      </footer>
    </main>
  );
}
