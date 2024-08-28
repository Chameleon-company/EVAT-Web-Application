import React, { useState } from 'react';
import './progress2.css';

const ProgressBar2 = () => {
  const [progress, setProgress] = useState(0);
  const [kw, setKW] = useState(0);

  const maxKW = 350; // Maximum KW range
  const progressBarWidth2 = 300; // Set the width of the progress bar (in pixels)

  // Function to handle mouse drag movement
  const handleMouseMove = (e) => {
    const ProgressBar2 = document.getElementById('progress-bar');
    const rect = ProgressBar2.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    
    setProgress(newProgress);
    setKW(Math.round((newProgress / 100) * maxKW));
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
    <div className="progress-container2">
      <p>{kw}KW - {maxKW}KW</p>
      <div
        id="progress-bar2"
        className="progress-bar2"
        onMouseDown={handleMouseDown}
      >
        <div
          className="progress-bar-fill2"
          style={{ width: `${progress}%` }}
        />
        <div
          className="slider2"
          style={{ left: `calc(${progress}% - 15px)` }} // Position the ellipse
        />
      </div>
      <div className="kw-display2">{kw}KW</div>
    </div>
  );
};

export default ProgressBar2;
