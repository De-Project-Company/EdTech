'use client';
import React, { useEffect, useRef, useState } from 'react';
import './PProgressBar.css';

interface ProgressBarProps {
  initialProgress?: number;
  height?: number;
}

const LinearProgressBar: React.FC<ProgressBarProps> = ({
  initialProgress = 0,
  height = 200
}) => {
  const [progress, setProgress] = useState(initialProgress);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      intervalRef.current = setInterval(() => {
        setProgress(prevProgress =>
          prevProgress < 100 ? prevProgress + 1 : 100
        );
      }, 50);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    };

    updateProgress();
  }, []);

  const stopProgressBar = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleHeightChange = (newHeight: number) => {
    // Adjust the height based on the provided value
    if (newHeight >= 0 && newHeight <= 400) {
      height = newHeight;
    }
  };

  return (
    <div
      className="progress-container"
      style={{ height: `${height}px` }}
      onClick={stopProgressBar}
    >
      <div className="progress-bar" style={{ height: `${progress}%` }}></div>
    </div>
  );
};

export default LinearProgressBar;
