import React, { useState } from 'react';
import './progress.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [mileage, setMileage] = useState(0);

  const maxMileage = 100; // Maximum kilometers
  const progressBarWidth = 300; // Set the width of the progress bar (in pixels)

  // Function to handle mouse drag movement
  const handleMouseMove = (e) => {
    const progressBar = document.getElementById('progress-bar');
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    
    setProgress(newProgress);
    setMileage(Math.round((newProgress / 100) * maxMileage));
  };

  // Function to start dragging
  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Function to stop dragging
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="progress-container">
      <div
        id="progress-bar"
        className="progress-bar"
        onMouseDown={handleMouseDown}
      >
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
        <div
          className="slider"
          style={{ left: `calc(${progress}% - 15px)` }} // Position the ellipse
        />
      </div>
      <div className="mileage-display">{mileage} Km</div>
    </div>
  );
};

export default ProgressBar;

