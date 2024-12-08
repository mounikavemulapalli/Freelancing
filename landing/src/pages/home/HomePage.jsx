import React from "react";
import "./HomePage.css";
import Sec2 from "./Sec2";
import Roadmap from "../roadmap/Roadmap";
import TokenomicsChart from "../chart/TokenomicsChart";

function HomePage() {
  return (
    <>
      <div className="container">
        <video autoPlay muted loop className="background-video">
        <source src="/videos/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>
            Rev your engines<br></br>
            race to the<br></br>
            future with<br></br>
            Loop of Infinity{" "}
          </h1>
          <h3>where gaming meets blockchain and losses meet their match!</h3>
          <button className="stake-button">STAKE</button>
        </div>

        <Sec2/>
        <Roadmap/>
        <TokenomicsChart/>
      </div>


      {/* <div className="sections">
          <div className="section">
            <h2>Predict-Verse</h2>
            <p>Blockchain based predictive token platform</p>
            <div className="platforms">
              <span>iOS</span>
              <span>Android</span>
            </div>
          </div>
          <div className="section">
            <h2>LoopSwap</h2>
            <p>Revolutionizing Decentralized Trading</p>
            <div className="platforms">
              <span>Multiplatform</span>
            </div>
          </div>
          <div className="section">
            <h2>Loop Of Infinity</h2>
            <p>The Ultimate Blockchain-Based AAA+ P2E Racing Game</p>
            <div className="platforms">
              <span>PC</span>
              <span>Mac</span>
              <span>iOS</span>
              <span>Android</span>
            </div>
          </div>
          </div> */}
    </>
  );
}

export default HomePage;
