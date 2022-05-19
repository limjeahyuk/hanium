import React, { useEffect, useState } from 'react';
import './TabCheck.css';
import SearchIcon from '@mui/icons-material/Search';

const TabWork = (props) => {
  const worklist = ['문서작업', '운동', '코딩', '영상작업'];
  const [work, setWork] = useState(['일']);
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    props.onChangeWork(work);
  }, [plus, minus]);

  const condition = (e, i) => {
    if (e.target.checked === true) {
      if (count === 0) {
        setWork([worklist[i]]);
        plus();
      } else {
        setWork((pre) => {
          return [...pre, worklist[i]];
        });
        plus();
      }
    } else {
      if (count === 1) {
        setWork(['일']);
        minus();
      } else {
        const cc = work.filter((word) => word !== worklist[i]);
        setWork(cc);
        minus();
      }
    }
  };

  const checkHandler = (e) => {
    switch (e.target.value) {
      case worklist[0]:
        condition(e, 0);
        break;
      case worklist[1]:
        condition(e, 1);
        break;
      case worklist[2]:
        condition(e, 2);
        break;
      case worklist[3]:
        condition(e, 3);
        break;
      default:
        break;
    }
  };

  const workmap = worklist.map((work, index) => (
    <label htmlFor={index} key={index}>
      <input
        type="checkbox"
        name="work"
        id={index}
        value={work}
        onChange={(e) => checkHandler(e)}
      />
      {work}
    </label>
  ));

  return (
    <div>
      <div className="question">{workmap}</div>
      <div className="searchbox">
        <input type="text" placeholder="검색"></input>
        <SearchIcon fontSize="large" />
      </div>
    </div>
  );
};

export default TabWork;
