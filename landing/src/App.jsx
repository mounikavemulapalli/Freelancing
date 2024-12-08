
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import LoadingScreen from './components/Loadscreen/LoadingScreen';
import HomePage from './pages/home/HomePage';
import Navbar from './components/navbar/Navbar';
import Roadmap from './pages/roadmap/Roadmap';
import TokenomicsChart from './pages/chart/TokenomicsChart';
import Footer from './components/footer/Footer';
import FreelanceAdvertisement from './components/FreelanceAdvertisement';
import About from './pages/about/About';


const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <BrowserRouter>
      {location.pathname !== '/' && <Navbar />} 
      <Routes>
        <Route path="/" element={loadingComplete ? <StartScreen /> : <LoadingScreen onComplete={handleLoadingComplete} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="tokonomics" element={<TokenomicsChart />} />
        <Route path="/h" element={<FreelanceAdvertisement />} />
        <Route path="/about" element={<About />} />
     
      </Routes>
      {location.pathname !== '/' && <Footer />} 
    </BrowserRouter>
  );
};

export default App;

































// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LoadingScreen from './components/Loadscreen/LoadingScreen';
// import HomePage from './components/HomePage';
// import Navbar from './components/navbar/Navbar';

// const App = () => {
//   const [loadingComplete, setLoadingComplete] = useState(false);

//   const handleLoadingComplete = () => {
//     setLoadingComplete(true);
//   };

//   return (
//     <BrowserRouter>
//         <Navbar/>
//       <Routes>
//         <Route path="/" element={loadingComplete ? <StartScreen /> : <LoadingScreen onComplete={handleLoadingComplete} />} />

//         <Route path="homepage" element={<HomePage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;