import React, { useEffect, useState } from 'react';
import './TabCheck.css';

import SearchIcon from '@mui/icons-material/Search';

const TabPoint = (props) => {
  const pointlist = ['1000', '2000', '5000', '10000'];
  const [point, setpoint] = useState(['포인트']);
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    props.onChangePoint(point);
  }, [plus, minus]);

  const condition = (e, i) => {
    if (e.target.checked === true) {
      if (count === 0) {
        setpoint([pointlist[i]]);
        plus();
      } else {
        setpoint((pre) => {
          return [...pre, pointlist[i]];
        });
        plus();
      }
    } else {
      if (count === 1) {
        setpoint(['포인트']);
        minus();
      } else {
        const cc = point.filter((word) => word !== pointlist[i]);
        setpoint(cc);
        minus();
      }
    }
  };

  const checkHandler = (e) => {
    switch (e.target.value) {
      case pointlist[0]:
        condition(e, 0);
        break;
      case pointlist[1]:
        condition(e, 1);
        break;
      case pointlist[2]:
        condition(e, 2);
        break;
      case pointlist[3]:
        condition(e, 3);
        break;
      default:
        break;
    }
  };

  const pointmap = pointlist.map((point, index) => (
    <label key={index} htmlFor={index}>
      <input
        type="checkbox"
        id={index}
        name="point"
        value={point}
        onChange={(e) => checkHandler(e)}
      />
      {point}
    </label>
  ));

  return (
    <div>
      <div className="question">{pointmap}</div>
      <div className="searchbox">
        <input type="text" placeholder="검색"></input>
        <SearchIcon fontSize="large" />
      </div>
    </div>
  );
};

export default TabPoint;
