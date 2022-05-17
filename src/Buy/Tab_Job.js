import React, { useEffect, useState } from 'react';
import './TabCheck.css';

import SearchIcon from '@mui/icons-material/Search';

const Tab_Job = (props) => {
  const joblist = ['컴공과', '비서과', '유교과', '항공과'];
  const [job, setJob] = useState(['직종']);
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
    changeTitle();
    console.log(count);
  };

  const minus = () => {
    setCount(count - 1);
    changeTitle();
  };

  const changeTitle = () => {
    props.onChangeJob(job);
  };

  useEffect(() => {
    console.log('렌더링');
  }, [changeTitle()]);

  const checkHandler = (e) => {
    switch (e.target.value) {
      case joblist[0]:
        if (e.target.checked === true) {
          if (count === 0) {
            setJob(joblist[0]);
            plus();
          } else {
            setJob((pre) => {
              return [...pre, joblist[0]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setJob(['직종']);
            minus();
          } else {
            const cc = job.filter((word) => word !== joblist[0]);
            setJob(cc);
            minus();
          }
        }
        break;
      case joblist[1]:
        if (e.target.checked === true) {
          if (count === 0) {
            setJob(joblist[1]);
            plus();
          } else {
            setJob((pre) => {
              return [...pre, joblist[1]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setJob(['직종']);
            minus();
          } else {
            const cc = job.filter((word) => word !== joblist[1]);
            setJob(cc);
            minus();
          }
        }
        break;
      case joblist[2]:
        if (e.target.checked === true) {
          if (count === 0) {
            setJob(joblist[2]);
            plus();
          } else {
            setJob((pre) => {
              return [...pre, joblist[2]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setJob(['직종']);
            minus();
          } else {
            const cc = job.filter((word) => word !== joblist[2]);
            setJob(cc);
            minus();
          }
        }
        break;
      case joblist[3]:
        if (e.target.checked === true) {
          if (count === 0) {
            setJob(joblist[3]);
            plus();
          } else {
            setJob((pre) => {
              return [...pre, joblist[3]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setJob(['직종']);
            minus();
          } else {
            const cc = job.filter((word) => word !== joblist[3]);
            setJob(cc);
            minus();
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="question">
        <div>
          <input type="checkbox" name="job" value={joblist[0]} onChange={(e) => checkHandler(e)} />
          {joblist[0]}
        </div>
        <div>
          <input type="checkbox" name="job" value={joblist[1]} onChange={(e) => checkHandler(e)} />
          {joblist[1]}
        </div>
        <div>
          <input type="checkbox" name="job" value={joblist[2]} onChange={(e) => checkHandler(e)} />
          {joblist[2]}
        </div>
        <div>
          <input type="checkbox" name="job" value={joblist[3]} onChange={(e) => checkHandler(e)} />
          {joblist[3]}
        </div>
      </div>
      <div className="searchbox">
        <input type="text" placeholder="검색"></input>
        <SearchIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Tab_Job;
