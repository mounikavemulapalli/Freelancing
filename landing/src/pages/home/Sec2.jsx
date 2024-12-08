// // import React, { useEffect, useState } from 'react';
// // import uniswapLogo from '../../assets/logo.png'; 
// // import inchLogo from '../../assets/logo.png'; 
// // import chainlinkLogo from '../../assets/logo.png';
// // import metamaskLogo from '../../assets/logo.png'; 
// // import dydxLogo from '../../assets/logo.png'; 
// // import raydiumLogo from '../../assets/logo.png'; 
// // import pancakeswapLogo from '../../assets/logo.png'; 
// // import newImage from '../../assets/logo.png'; 
// // import './Sec2.css';

// // const Sec2 = () => {
// //   const [showLogos, setShowLogos] = useState(true);

// //   useEffect(() => {
// //     const handleAnimationIteration = () => {
// //       setShowLogos(prevShowLogos => !prevShowLogos);
// //     };

// //     const blueLineElement = document.getElementById('blue-line');
// //     blueLineElement.addEventListener('animationiteration', handleAnimationIteration);

// //     return () => {
// //       blueLineElement.removeEventListener('animationiteration', handleAnimationIteration);
// //     };
// //   }, []);

// //   return (
// //     <div className="partners-container">
// //       <h2>Our Partners</h2>
// //       <div className={`partners ${showLogos ? 'visible' : 'hidden'}`}>
// //         <div className="partner-logo"><img src={uniswapLogo} alt="Uniswap" /></div>
// //         <div className="partner-logo"><img src={inchLogo} alt="1inch" /></div>
// //         <div className="partner-logo"><img src={chainlinkLogo} alt="Chainlink" /></div>
// //         <div className="partner-logo"><img src={metamaskLogo} alt="MetaMask" /></div>
// //         <div className="partner-logo"><img src={dydxLogo} alt="dYdX" /></div>
// //         <div className="partner-logo"><img src={raydiumLogo} alt="Raydium" /></div>
// //         <div className="partner-logo"><img src={pancakeswapLogo} alt="PancakeSwap" /></div>
// //       </div>
// //       <div className={`image-container ${!showLogos ? 'visible' : 'hidden'}`}>
// //         <img src={newImage} alt="New" />
// //       </div>
// //       <div className="blue-line" id="blue-line"></div>
// //     </div>
// //   );
// // };

// // export default Sec2;



// import React, { useEffect, useState } from 'react';
// import newImage from '../../assets/logo.png'; // New image to replace the icons
// import './Sec2.css';

// const Sec2 = () => {
//   const [showLogos, setShowLogos] = useState(true);

//   useEffect(() => {
//     const handleAnimationIteration = () => {
//       setShowLogos((prevShowLogos) => !prevShowLogos);
//     };

//     const blueLineElement = document.getElementById('blue-line');
//     blueLineElement.addEventListener('animationiteration', handleAnimationIteration);

//     return () => {
//       blueLineElement.removeEventListener('animationiteration', handleAnimationIteration);
//     };
//   }, []);

//   return (
//     <div className="partners-container">
//       <h2>Our Partners</h2>
//       <div className={`partners ${showLogos ? 'visible' : 'hidden'}`}>
//         {showLogos ? (
//           <>
//             <div className="partner-logo"><img src={newImage} alt="Partner 1" /></div>
//             <div className="partner-logo"><img src={newImage} alt="Partner 2" /></div>
//             <div className="partner-logo"><img src={newImage} alt="Partner 3" /></div>
//             <div className="partner-logo"><img src={newImage} alt="Partner 4" /></div>
//             <div className="partner-logo"><img src={newImage} alt="Partner 5" /></div>
//             <div className="partner-logo"><img src={newImage} alt="Partner 6" /></div>
//             <div className="partner-logo"><img src={newImage} alt="Partner 7" /></div>
//           </>
//         ) : (
//           <div className={`single-image ${showLogos ? 'visible' : 'hidden'}`}>
//             <img src={newImage} alt="New Single" />
//           </div>
//         )}
//       </div>
//       <div className="blue-line" id="blue-line"></div>
//     </div>
//   );
// };

// export default Sec2;
import React, { useEffect, useState } from 'react';
import newImage from '../../assets/logo.png'; // New image to replace the icons
import './Sec2.css';

const Sec2 = () => {
  const [showLogos, setShowLogos] = useState(true);

  useEffect(() => {
    const handleAnimationIteration = () => {
      setShowLogos((prevShowLogos) => !prevShowLogos);
    };

    const blueLineElement = document.getElementById('blue-line');
    blueLineElement.addEventListener('animationiteration', handleAnimationIteration);

    return () => {
      blueLineElement.removeEventListener('animationiteration', handleAnimationIteration);
    };
  }, []);

  return (
    <div className="outer-container">
    <div className='partners-box'>
    <div className="partners-container">
    <h2>{showLogos ? 'Our Partners' : 'Supported by'}</h2>
      <div className="content-wrapper">
        <div className={`partners ${showLogos ? 'visible' : 'hidden'}`}>
          <div className="partner-logo"><img src={newImage} alt="Partner 1" /></div>
          <div className="partner-logo"><img src={newImage} alt="Partner 2" /></div>
          <div className="partner-logo"><img src={newImage} alt="Partner 3" /></div>
          <div className="partner-logo"><img src={newImage} alt="Partner 4" /></div>
          <div className="partner-logo"><img src={newImage} alt="Partner 5" /></div>
          <div className="partner-logo"><img src={newImage} alt="Partner 6" /></div>
          <div className="partner-logo"><img src={newImage} alt="Partner 7" /></div>
        </div>
        <div className={`single-image ${!showLogos ? 'visible' : 'hidden'}`}>
          <img src={newImage} alt="New Single" />
        </div>
      </div>
      <div className="blue-line" id="blue-line"></div>
    </div>
    </div>
    </div>
  );
};

export default Sec2;
