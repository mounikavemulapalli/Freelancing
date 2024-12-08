import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import newImage from '../../../public/front.gif'; 
import anotherImage from '../../assets/logo1.png'; 

const ProgressIndicator = () => {
  const [percentage, setPercentage] = useState(0);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setCompleted(true);
          return prev;
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const circleStyle = {
    strokeDasharray: '283',
    strokeDashoffset: `${283 - (283 * percentage) / 100}`,
    transition: 'stroke-dashoffset 0.5s ease',
  };

  const handleStartClick = () => {
    navigate('/home');
    window.location.reload();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000', position: 'relative', textAlign: 'center' }}>
      {!completed && (
        <>
          <svg width="200" height="200" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#d3c6b1"
              strokeWidth="1"
              fill="none"
              style={circleStyle}
            />
            <text x="50%" y="28%" textAnchor="middle" dy=".3em" fill="#d3c6b1" fontSize="10">{`${percentage}%`}</text>
          </svg>
          <img 
            src={newImage}
            alt="Loading Animation"
            style={{
              width: '95px', 
              height: '95px',
              position: 'absolute', 
              top: '54%',
              left: '50%',
              transform: 'translate(-50%, -50%)', 
              borderRadius: '50%',
              display: completed ? 'none' : 'block',
            }}
          />
        </>
      )}
      {completed && (
        <>
        <div style={{ marginBottom: '420px' }}>
        <div style={{ marginBottom: '20px', marginTop: '0' }}>
            <h1 style={{ color: '#ffffff', marginBottom: '10px' }}>FREELANCE FREEDOM AT YOUR FINGERTIPS</h1>
            <p style={{ color: '#bbbbbb', marginBottom: '20px', marginLeft:"200px", maxWidth: '600px' }}>
              Find skilled freelancers for your projects, from writing to web development on our platform - where talent meets opportunity!
            </p>
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
            <img 
              src={anotherImage}
              alt="Another Image"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '75px',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              }}
            />
            <img 
              src={anotherImage}
              alt="Another Image"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '75px',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              }}
            />
          </div>
          <button
            onClick={handleStartClick}
            style={{
              padding: '14px 70px',
              backgroundColor: 'transparent',
              color: '#fff',
              borderRadius: '20px',
              border: '1px solid white',
              transition: 'background-color 0.3s ease',
              marginTop: '20px'
            }}
          >
            Start
          </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProgressIndicator;













































// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import newImage from '../../../public/front.gif';

// // const ProgressIndicator = () => {
// //   const [percentage, setPercentage] = useState(0);
// //   const [completed, setCompleted] = useState(false); 
// //   const navigate = useNavigate(); 

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setPercentage(prev => {
// //         if (prev < 100) {
// //           return prev + 1;
// //         } else {
// //           clearInterval(interval);
// //           setCompleted(true); 
// //           return prev;
// //         }
// //       });
// //     }, 100); 
// //     return () => clearInterval(interval);
// //   }, []);

// //   const circleStyle = {
// //     strokeDasharray: '283',
// //     strokeDashoffset: `${283 - (283 * percentage) / 100}`,
// //     transition: 'stroke-dashoffset 0.5s ease',
// //   };
// //   const handleStartClick = () => {
// //     navigate('/home'); 
// //     window.location.reload();
// //   };

// //   return (
// //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000', position: 'relative' }}>
// //       {!completed && (
// //         <svg width="200" height="200" viewBox="0 0 100 100">
// //           <circle
// //             cx="50"
// //             cy="50"
// //             r="45" 
// //             stroke="#d3c6b1"
// //             strokeWidth="1"  
// //             fill="none"
// //             style={circleStyle}
// //           />
// //           <text x="50%" y="25%" textAnchor="middle" dy=".3em" fill="#d3c6b1" fontSize="10">{`${percentage}%`}</text>
// //         </svg>
// //       )}
      
// //       <img 
// //        src={newImage}
// //         alt="Start Animation"
// //         style={{
// //           position: 'absolute',
// //           width: '100px',
// //           height: '100px',
// //           top: '53%',
// //           left: '50%',
// //           transform: 'translate(-50%, -50%)',
// //           borderRadius: '68px',
// //         }}
// //       />
      
// //       {completed && (
// //         <button
// //         onClick={handleStartClick}
// //           style={{
// //             position: 'absolute',
// //             top: '70%',  
// //             left: '51%',
// //             transform: 'translateX(-50%)',
// //             padding: '14px 70px',
// //             backgroundColor: 'transparent',
// //             color: '#fff',
// //             borderRadius: '20px',
// //             border:'1px solid white',
// //             transition: 'background-color 0.3s ease',
// //           }}
// //         >
// //           Start
// //         </button>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProgressIndicator;
// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import newImage from '../../../public/front.gif'; // Replace with the actual path to your image

// // const ProgressIndicator = () => {
// //   const [percentage, setPercentage] = useState(0);
// //   const [completed, setCompleted] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setPercentage(prev => {
// //         if (prev < 100) {
// //           return prev + 1;
// //         } else {
// //           clearInterval(interval);
// //           setCompleted(true);
// //           return prev;
// //         }
// //       });
// //     }, 100);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const circleStyle = {
// //     strokeDasharray: '283',
// //     strokeDashoffset: `${283 - (283 * percentage) / 100}`,
// //     transition: 'stroke-dashoffset 0.5s ease',
// //   };

// //   const handleStartClick = () => {
// //     navigate('/home');
// //     window.location.reload();
// //   };

// //   return (
// //     <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000', position: 'relative' }}>
// //       {!completed && (
// //         <svg width="200" height="200" viewBox="0 0 100 100">
// //           <circle
// //             cx="50"
// //             cy="50"
// //             r="45"
// //             stroke="#d3c6b1"
// //             strokeWidth="1"
// //             fill="none"
// //             style={circleStyle}
// //           />
// //           <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="#d3c6b1" fontSize="10">{`${percentage}%`}</text>
// //         </svg>
// //       )}
// //       {completed && (
// //         <>
// //           <img 
// //             src={newImage}
// //             alt="Start Animation"
// //             style={{
// //               width: '150px',
// //               height: '150px',
// //               marginBottom: '20px',
// //               borderRadius: '75px',
// //             }}
// //           />
// //           <button
// //             onClick={handleStartClick}
// //             style={{
// //               padding: '14px 70px',
// //               backgroundColor: 'transparent',
// //               color: '#fff',
// //               borderRadius: '20px',
// //               border: '1px solid white',
// //               transition: 'background-color 0.3s ease',
// //             }}
// //           >
// //             Start
// //           </button>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProgressIndicator;
