// // ProgressBar.tsx
// import React, { useEffect, useRef, useState } from 'react';
// import './ProgressBar.css';

// interface ProgressBarProps {
//   requestTime: number;
// }

// const ProgressBar: React.FC<ProgressBarProps> = ({ requestTime }) => {
//   const progressBarRef = useRef<HTMLDivElement>(null);
//   const [progressPercentage, setProgressPercentage] = useState<number>(0);

//   useEffect(() => {
//     const startTime = Date.now();
//     const endTime = startTime + requestTime;

//     const updateProgressBar = () => {
//       const currentTime = Date.now();
//       const progress = ((currentTime - startTime) / requestTime) * 100;

//       setProgressPercentage(progress);

//       if (progressBarRef.current) {
//         progressBarRef.current.style.width = `${progress}%`;
//       }

//       if (currentTime < endTime) {
//         requestAnimationFrame(updateProgressBar);
//       }
//     };

//     requestAnimationFrame(updateProgressBar);
//   }, [requestTime]);

//   return (
//     <>
//       <div className="flex-col items-center justify-center">
//         <h2 className="text-[38px] font-normal leading-[128%]">Uploading...</h2>
//         <div className="progress-bar-container">
//           <div className="progress-bar" ref={progressBarRef}></div>
//         </div>
//         <h2>{Math.round(progressPercentage)}% complete</h2>
//       </div>
//     </>
//   );
// };

// export default ProgressBar;

// ProgressBar.tsx
import React, { useEffect, useRef, useState } from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  animate: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ animate }) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progressPercentage, setProgressPercentage] = useState<number>(0);

  useEffect(() => {
    let animationId: number;

    const startTime = Date.now();
    const endTime = startTime + 3200;

    const updateProgressBar = () => {
      const currentTime = Date.now();
      const progress =
        ((currentTime - startTime) / (endTime - startTime)) * 100;

      setProgressPercentage(progress);

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }

      if (currentTime < endTime && animate) {
        animationId = requestAnimationFrame(updateProgressBar);
      }
    };

    if (animate) {
      requestAnimationFrame(updateProgressBar);
    }

    return () => cancelAnimationFrame(animationId);
  }, [animate]);

  return (
    <>
      <div className="flex-col items-center justify-center">
        <h2 className="text-[38px] font-normal leading-[128%]">Uploading...</h2>
        <div className="progress-bar-container">
          <div className="progress-bar" ref={progressBarRef}></div>
        </div>
        <h2>{Math.round(progressPercentage)}% complete</h2>
      </div>
    </>
  );
};

export default ProgressBar;
