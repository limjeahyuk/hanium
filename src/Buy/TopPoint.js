import React from 'react';
import './TopPoint.css';

const TopPoint = () => {
  return (
    <div>
      <div className="pointbox">
        <p>My Point</p>
        <p>3000</p>
      </div>
      <div className="write">
        <button>글쓰기</button>
      </div>
    </div>
  );
};

export default TopPoint;
