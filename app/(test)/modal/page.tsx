'use client';
import UploadModal from '../../../components/modals/UploadModal';
import ErrorModal from '../../../components/modals/ErrorModal';
import useDisclosure from '../../../hooks/useDisclosure';
import ProgressBar from '../../../components/ProgressBar';
import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6
} from '../../../libs/constants';
import Card from '../../../components/cards/assessmentcard';
import Calendar from '../../../components/calendar';
// import { uploadImage, makeApiRequest } from '../../api/upload/route';
// import RoundedProgressBar from '../../../components/ProgressBar/rounedProgressbar';
import Button from '@ui/Button';
// import React, { useState } from 'react';
// import axios from 'axios';

// // // // function page() {
//
// // // //   return (
// // // //     <div className="flex items-center justify-center">

// // // //       <UploadModal isOpen={isOpen} onClose={onClose} />

// // // //       <button onClick={startLoading} disabled={isLoading}>
// // // //         {isLoading ? 'Loading...' : 'Start Loading'}
// // // //       </button>
// // // //       <ProgressBar animate={!isLoading} />
// // // //       {/* Use ProgressBar with the resetTrigger prop */}
// // // //       {/* <ProgressBar requestTime={requestTime} /> */}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default page;

// // // ParentComponent.tsx
// // import React, { useState, useEffect } from 'react';
// // import ProgressBar from './ProgressBar';

// const ParentComponent: React.FC = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//  const startLoading = () => {
//    setIsLoading(true);

//    // Simulate a demo API call using Axios
//    axios
//      .get('https://jsonplaceholder.typicode.com/todos/1')
//      .then(response => {
//        // Simulate a loading process
//        const startTime = Date.now();
//        const endTime = startTime + 3000; // Adjust the timeout duration as needed

//        const updateLoading = () => {
//          const currentTime = Date.now();
//          const progress =
//            ((currentTime - startTime) / (endTime - startTime)) * 100;

//          if (progress < 100) {
//            requestAnimationFrame(updateLoading);
//          } else {
//            setIsLoading(false); // Set isLoading to false after loading is complete
//          }
//        };

//        requestAnimationFrame(updateLoading);
//      })
//      .catch(error => {
//        console.error('Error during API call:', error);
//        setIsLoading(false);
//      });
//  };

//   return (
//     <div>
//       <button onClick={startLoading} disabled={isLoading}>
//         {isLoading ? 'Loading...' : 'Start Loading'}
//       </button>

//       {isLoading ? (
//         <>
//           <p>Loading...</p>
//         </>
//       ) : (
//         <p>Page Content</p>
//       )}
//       <ProgressBar animate={isLoading} />
//     </div>
//   );
// };

// export default ParentComponent;

// // // ParentComponent.tsx

// // const ParentComponent: React.FC = () => {
// //   return (
// //     <div>
// //       <p>Page Content</p>
// //       <RoundedProgressBar targetPercentage={75} /> {/* Adjust the targetPercentage as needed */}
// //     </div>
// //   );
// // };

// // export default ParentComponent;
// // 'use client';
// // // // App.tsx
// // // import React, { useState } from 'react';
// // import ProgressBar from '../../../components/ProgressBar/rounedProgressbar';

// // const App: React.FC = () => {
// //   const [progress, setProgress] = useState<number>(50); // Set your desired progress value here

// //   return (
// //     <div className="App">
// //       <h1>Round Progress Bar Example</h1>
// //       <ProgressBar percent={progress} />
// //     </div>
// //   );
// // };

// // // export default App;
// // import CircularProgressBar from '../../../components/ProgressBar/rounedProgressbar';
// // import React, { useState } from 'react';

// // function page() {
// //   const [progress, setProgress] = useState<number>(50); // Set your desired progress value here
// //   const serviceTabData = [{ value: 80 }, { value: 50 }, { value: 90 }];

// //   return (
// //     <>
// //       <h1>Round Progress Bar Example</h1>
// //       {/* <ProgressBar percent={progress} /> */}
// //       {serviceTabData.map((tab, index) => (
// //         <CircularProgressBar
// //           key={index}
// //           serviceTab={serviceTabData}
// //           index={index}
// //         />
// //       ))}
// //     </>
// //   );
// // }

// // export default page;

import React, { useState } from 'react';
import { CircularProgress } from '@nextui-org/react';

export default function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const requestTime = 3000;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const startLoading = () => {
    setIsLoading(true);

    const startLoading = () => {
      setIsLoading(true);

      // Simulate a demo API call
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
          // Simulate a loading process
          const startTime = Date.now();
          const endTime = startTime + 3000; // Adjust the timeout duration as needed

          const updateLoading = () => {
            const currentTime = Date.now();
            const progress =
              ((currentTime - startTime) / (endTime - startTime)) * 100;

            if (progress < 100) {
              requestAnimationFrame(updateLoading);
            } else {
              setIsLoading(false);
            }
          };

          requestAnimationFrame(updateLoading);
        })
        .catch(error => {
          console.error('Error during API call:', error);
          setIsLoading(false);
        });
    };
  };

  return (
    <>
      <div className="flex items-center justify-between content-center">
        <CircularProgress
          classNames={{
            svg: 'w-36 h-36 drop-shadow-md',
            indicator: 'stroke-[#351A8D]',
            track: 'stroke-[#D9D3EF]',
            value: 'text-3xl font-semibold text-[#351A8D]'
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
        <Button onClick={onOpen} size={'md'}>
          Open Modal
        </Button>
        <button onClick={startLoading} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Start Loading'}{' '}
        </button>
        <ProgressBar animate={isLoading} />
      </div>
      <ErrorModal isOpen={isOpen} onClose={onClose} />
      <div className="bg-[#F2EFFF] py-[24px] px-[18px] rounded-[12px] mt-[24px] w-[940px] ">
        <Card {...card1} />
        <Card {...card2} />
        <Card {...card3} />
        <Card {...card4} />
        <Card {...card5} />
        <Card {...card6} />
      </div>
      <Calendar />
    </>
  );
}
