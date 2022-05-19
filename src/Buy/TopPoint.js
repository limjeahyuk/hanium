import { Link } from 'react-router-dom';
import React from 'react';
import './TopPoint.css';

const TopPoint = () => {
  return (
    <div style={{ display: 'inline-block', width: '250px' }}>
      <div className="pointbox">
        <p>My Point</p>
        <p>3000</p>
      </div>
      <div className="write">
        <Link to="/college-mate/buy/post">
          <button>글쓰기</button>
        </Link>
      </div>
    </div>
  );
};

export default TopPoint;
