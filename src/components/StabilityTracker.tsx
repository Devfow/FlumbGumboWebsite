import React from 'react';
import './StabilityTracker.css';

const StabilityTracker = () => {
  return (
    <div className="stability-tracker">
      <div className="tracker-label">Dimensional Stability</div>
      <div className="tracker-value">98.7%</div>
      <div className="tracker-bar">
        <div className="tracker-fill" style={{ width: '98.7%' }}></div>
      </div>
    </div>
  );
};

export default StabilityTracker;
