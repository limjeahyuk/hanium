import React from 'react';
import Sub_header from '../Header/Sub_header';
import Buy_Guide from './Buy_Guide';
import './Buy.css';

const Buy = () => {
  const total = 22222;

  return (
    <div>
      <Sub_header />
      <Buy_Guide />
      <div className="bar" />
      <div className="bar intro">
        <span>재능정보</span>
        <span> | 총{total}건</span>
      </div>
    </div>
  );
};

export default Buy;
