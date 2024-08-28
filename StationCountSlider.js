import React, { useState } from 'react';
import './StationCountSlider.css';

const StationCountSlider = () => {
  const [currentPosition, setCurrentPosition] = useState(2); // Default starting position (index of 6+)
  const [lockedPosition, setLockedPosition] = useState(null); // Locked position index
  const [isDragging, setIsDragging] = useState(false);

  const numbers = ['2+', '4+', '6+', '8+', 'Any']; // Numbers to display

  // Handle dragging behavior
  const handleDrag = (event) => {
    const boundingRect = event.target.getBoundingClientRect();
    const offsetY = event.clientY - boundingRect.top;
    const sliderHeight = boundingRect.height;
    const position = Math.floor((offsetY / sliderHeight) * numbers.length);
    if (position >= 0 && position < numbers.length) {
      setCurrentPosition(position);
    }
  };

  // Handle lock
  const handleLock = () => {
    setLockedPosition(currentPosition);
    setIsDragging(false);
  };

  return (
    <div className="station-count-slider-container">
    
      <div
        className="slider3"
        onMouseDown={() => setIsDragging(true)}
        onMouseMove={(e) => isDragging && handleDrag(e)}
        onMouseUp={handleLock}
      >
        {numbers.map((number, index) => (
          <div
            key={index}
            className={`station-number ${
              lockedPosition !== null &&
              index >= Math.min(currentPosition, lockedPosition) &&
              index <= Math.max(currentPosition, lockedPosition)
                ? 'selected'
                : 'unselected'
            }`}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationCountSlider;
