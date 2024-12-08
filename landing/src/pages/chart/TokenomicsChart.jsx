import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './TokenomicsChart.css';

const TokenomicsChart = () => {
  const data = {
    labels: [
      'Community Play-to-Earn Rewards',
      'PredictVerse',
      'Early Investors + Rewards + Staking',
      'LoopGuard',
      'Team',
      'Loop Network Ecosystem',
      'Advisor',
      'Marketing',
      'Treasury'
    ],
    datasets: [
      {
        label: 'Token Distribution',
        data: [21.72, 19.33, 27.98, 3.77, 14.05, 5.5, 2.77, 2.5, 2.38],
        backgroundColor: [
          '#00bfae', '#007bff', '#00c853', '#536dfe', '#ff4081', '#ffab00', '#d500f9', '#ff6d00', '#00e5ff'
        ],
        hoverOffset: 4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'white',
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: 'Tokenomics',
        color: 'white',
        font: {
          size: 22
        }
      }
    }
  };

  return (
    <div className="tokenomics-main-container">
      <div className="tokenomics-chart-container">
        <h2 className="tokenomics-title">Total Supply: 150 Billion Tokens</h2>
        <p className="tokenomics-tagline">
          Experience the Power of INFINITY by Unlocking Limitless Possibilities with our Revolutionary Token, Empowering Communities and Fueling Innovations!
        </p>
        <div className="chart-wrapper">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TokenomicsChart;
