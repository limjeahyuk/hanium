import React, { useEffect, useState } from 'react';
import Subheader from '../Header/Subheader';
import BuyGuide from './BuyGuide';
import './Buy.css';
import BuyPost from './BuyPost';
import axios from 'axios';
import Footer from '../Main/Footer';

const Buy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/college-mate/buy/read').then((response) => {
      console.log(response);
      setData(response);
    });
  }, []);

  return (
    <div>
      <Subheader />
      <BuyGuide />
      <div className="bar" />
      <BuyPost data={data} />
      <Footer />
    </div>
  );
};

export default Buy;
