import React, { useEffect, useState } from 'react';
import classes from './TabCheck.module.css';

import SearchIcon from '@mui/icons-material/Search';

const TabJob = (props) => {
  const joblist = ['컴공과', '비서과', '유교과', '항공과'];
  const [job, setJob] = useState(['직종']);
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    props.onChangeJob(job);
  }, [plus, minus]);

  const condition = (e, i) => {
    if (e.target.checked === true) {
      if (count === 0) {
        setJob([joblist[i]]);
        plus();
      } else {
        setJob((pre) => {
          return [...pre, joblist[i]];
        });
        plus();
      }
    } else {
      if (count === 1) {
        setJob(['직종']);
        minus();
      } else {
        const cc = job.filter((word) => word !== joblist[i]);
        setJob(cc);
        minus();
      }
    }
  };

  const checkHandler = (e) => {
    switch (e.target.value) {
      case joblist[0]:
        condition(e, 0);
        break;
      case joblist[1]:
        condition(e, 1);
        break;
      case joblist[2]:
        condition(e, 2);
        break;
      case joblist[3]:
        condition(e, 3);
        break;
      default:
        break;
    }
  };

  const jobmap = joblist.map((job, index) => (
    <label key={index} htmlFor={index}>
      <input type='checkbox' name={job} id={index} value={job} onChange={(e) => checkHandler(e)} />
      {job}
    </label>
  ));

  return (
    <div>
      <div className={classes.question}>{jobmap}</div>
      <div className={classes.searchbox}>
        <input type='text' placeholder='검색'></input>
        <SearchIcon fontSize='large' />
      </div>
    </div>
  );
};

export default TabJob;
