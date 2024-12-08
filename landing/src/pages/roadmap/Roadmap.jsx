// import React from 'react'
// import './Roadmap.css'

// function Roadmap() {
//   return (
//     <>


// <div
//   id="roadmap"
//   className="timeline w-full flex flex-col items-center justify-center bg-black py-40"
// >
//   <span className="timelineHeader w-full flex flex-col items-center justify-center text-center mb-10">
//     <div className="heading font-Days_One overflow-hidden text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
//       ROAD MAP
//     </div>
//   </span>
//   <div className="toggle-btns flex items-center justify-center rounded-full gap-2 mb-10">
//     <div className="toggle absolute z-1 rounded-full bg-blue-600 w-24 h-10 transition-transform duration-300 ease-in-out transform translate-x-[-90px]" />
//     <p className="p px-5 py-2 relative z-5 rounded-full cursor-pointer text-white">
//       2024
//     </p>
//     <p className="p px-5 py-2 relative z-5 rounded-full cursor-pointer text-white">
//       2025
//     </p>
//     <p className="p px-5 py-2 relative z-5 rounded-full cursor-pointer text-white">
//       2026
//     </p>
//   </div>
//   <div className="phases w-full flex flex-col items-center justify-center gap-8">
//     <div>
//       <div className="phase-no text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r bg-black p-4 relative z-10 from-purple-400 to-blue-600 text-center">
//         QUARTER 2
//       </div>
//       <div className="line absolute w-px bg-gradient-to-b from-gray-600 to-gray-800 h-[50%]" />
//       <div className="each-point flex flex-col items-center justify-center gap-8">
//         <div className="point flex items-center justify-center gap-8">
//           <div className="left text-right">
//             <div className="point-name translate-y-8 text-xl font-bold text-white">
//               Website Rebranding
//             </div>
//           </div>
//           <div className="circle relative z-5 w-4 h-4 bg-gray-500 border-4 border-black rounded-full" />
//           <div className="right text-left" />
//         </div>
//         <div className="point flex items-center justify-center gap-8">
//           <div className="left text-right" />
//           <div className="circle relative z-5 w-4 h-4 bg-gray-500 border-4 border-black rounded-full" />
//           <div className="right text-left">
//             <div className="point-name translate-y-8 text-xl font-bold text-white">
//               Staking
//             </div>
//           </div>
//         </div>
//         <div className="point flex items-center justify-center gap-8">
//           <div className="left text-right">
//             <div className="point-name translate-y-8 text-xl font-bold text-white">
//               Token Sale 2nd Round
//             </div>
//           </div>
//           <div className="circle relative z-5 w-4 h-4 bg-gray-500 border-4 border-black rounded-full" />
//           <div className="right text-left" />
//         </div>
//         <div className="point flex items-center justify-center gap-8">
//           <div className="left text-right" />
//           <div className="circle relative z-5 w-4 h-4 bg-gray-500 border-4 border-black rounded-full" />
//           <div className="right text-left">
//             <div className="point-name translate-y-8 text-xl font-bold text-white">
//               Referral Program
//             </div>
//           </div>
//         </div>
//         <div className="point flex items-center justify-center gap-8">
//           <div className="left text-right">
//             <div className="point-name translate-y-8 text-xl font-bold text-white">
//               CEX Listing
//             </div>
//           </div>
//           <div className="circle relative z-5 w-4 h-4 bg-gray-500 border-4 border-black rounded-full" />
//           <div className="right text-left" />
//         </div>
//       </div>
//     </div>
//     <div>
//       <div className="phase-no text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r bg-black p-4 relative z-10 from-purple-400 to-blue-600 text-center">
//         QUARTER 4
//       </div>
//       <div className="line absolute w-px bg-gradient-to-b from-gray-600 to-gray-800 h-[50%]" />
//       <div className="each-point flex flex-col items-center justify-center gap-8">
//         <div className="point flex items-center justify-center gap-8">
//           <div className="left text-right">
//             <div className="point-name translate-y-8 text-xl font-bold text-white">
//               Prediction Market
//             </div>
//           </div>
//           <div className="circle relative z-5 w-4 h-4 bg-gray-500 border-4 border-black rounded-full" />
//           <div className="right text-left" />
//         </div>
//         <div className="point flex items-center justify-center gap-8">
//           <div className="left text-right" />
//           <div className="circle relative z-5 w-4 h-4 bg-gray-500 border-4 border-black rounded-full" />
//           <div className="right text-left">
//             <div className="point-name translate-y-8 text-xl font-bold text-white">
//               CEX Listing
//             </div>
//           </div>
//         </div>
//         <div className="point flex items-center justify-center gap-8">
//           <div className="left text-right">
//             <div className="point-name translate-y-8 text-xl font-bold text-white">
//               New KOL (Campaigns)
//             </div>
//           </div>
//           <div className="circle relative z-5 w-4 h-4 bg-gray-500 border-4 border-black rounded-full" />
//           <div className="right text-left" />
//         </div>
//         <div className="point flex items-center justify-center gap-8">
//           <div className="left text-right" />
//           <div className="circle relative z-5 w-4 h-4 bg-gray-500 border-4 border-black rounded-full" />
//           <div className="right text-left">
//             <div className="point-name translate-y-8 text-xl font-bold text-white">
//               New Partnerships
//             </div>
//           </div>
//         </div>
//         <div className="point flex items-center justify-center gap-8">
//           <div className="left text-right">
//             <div className="point-name translate-y-8 text-xl font-bold text-white">
//               Burj Khalifa Takeover
//             </div>
//           </div>
//           <div className="circle relative z-5 w-4 h-4 bg-gray-500 border-4 border-black rounded-full" />
//           <div className="right text-left" />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

    
    
//     </>
//   )
// }

// export default Roadmap




import React, { useState } from 'react';
import './Roadmap.css';

function Roadmap() {
  const [activeYear, setActiveYear] = useState(2024);

  const handleYearChange = (year) => {
    setActiveYear(year);
  };

  const roadmapData = {
    2024: [
      { quarter: "QUARTER 2", points: ["Website Rebranding", " New Staking(url)", "Token Sale 2nd Round", "Referral Program", "CEX Listing(Audio)"] },
      { quarter: "QUARTER 4", points: ["Prediction Market", "CEX Listing(Audio)", "New KOL (Campaigns)", "New Partnerships", "Burj Khalifa Takeover"] }
    ],
    2025: [
      { quarter: "QUARTER 1", points: ["Platform Launching ", "Community Expansion", "Beta Testing(Product)"] },
      { quarter: "QUARTER 3", points: ["Major Update(Product)", "Global Expansion", "Strategic Partnerships"] }
    ],
    2026: [
      { quarter: "QUARTER 2", points: ["New Product Release", "Technology Upgrade"] },
      { quarter: "QUARTER 4", points: ["New Annual Summit", "Industry Recognition"] }
    ],
  };

  return (
    <div id="roadmap" className="timeline">
      <div className="timelineHeader">
        <h2 className="heading">ROAD MAP</h2>
      </div>
      <div className="toggle-btns">
        {[2024, 2025, 2026].map((year) => (
          <p
            key={year}
            className={`p ${activeYear === year ? "active" : ""}`}
            onClick={() => handleYearChange(year)}
          >
            {year}
          </p>
        ))}
      </div>
      <div className="phases">
        {roadmapData[activeYear].map((phase, index) => (
          <div key={index} className="each-point">
            <div className='pp'>
            <div className="phase-no">{phase.quarter}</div></div>
            {phase.points.map((point, idx) => (
              <div className="point" key={idx}>
                <div className="left">
                  <div className="point-name">{point}</div>
                </div>
                <div className="circle" />
                <div className="right" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
