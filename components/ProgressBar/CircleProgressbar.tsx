import React, { useEffect, useRef, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressBarProps {
  serviceTab: Array<{ value: number }>;
  index: number;
}

const CircularProgression: React.FC<CircularProgressBarProps> = ({
  serviceTab,
  index
}) => {
  // State to manage the progress bar percentage
  const [percentages, setPercentages] = useState([0, 0, 0]);

  // Ref for the container element
  const containerRef = useRef(null);

  // Intersection Observer to trigger animation when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const updatedPercentages = percentages.map((percentage, index) => {
              if (percentage < serviceTab[index].value) {
                return percentage + 1;
              }
              return percentage;
            });
            setPercentages(updatedPercentages);
          }
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [percentages, serviceTab]);

  return (
    <div ref={containerRef} className="m-10">
      <CircularProgressbar
        value={percentages[index]}
        text={`${percentages[index]}%`}
      />
    </div>
  );
};

export default CircularProgression;
