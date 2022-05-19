import React from 'react';
import Subheader from '../Header/Subheader';
import BuyGuide from './BuyGuide';
import './Buy.css';
import BuyPost from './BuyPost';

const Buy = () => {
  return (
    <div>
      <Subheader />
      <BuyGuide />
      <div className="bar" />
      <BuyPost />
    </div>
  );
};

export default Buy;
