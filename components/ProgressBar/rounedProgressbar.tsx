// CircularProgressBar.css
import React, { FC } from 'react';
import './CircularProgressBar.css';

interface CircularProgressBarProps {
  percent: number;
}

const CircularProgressBar: FC<CircularProgressBarProps> = ({ percent }) => {
  const strokeWidth = 8;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="circular-progress-bar">
      <div className="circular-progress-bar-circle">
        <div
          className="circular-progress-bar-progress"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            clip: `rect(auto, ${radius * 2}px, ${radius * 2}px, ${radius}px)`
          }}
        ></div>
      </div>
      <div
        className="circular-progress-bar-fill"
        style={{ transform: `rotate(${90 + (percent / 100) * 360}deg)` }}
      ></div>
      <div className="circular-progress-bar-text">{`${percent}%`}</div>
    </div>
  );
};

export default CircularProgressBar;
