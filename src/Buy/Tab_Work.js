import React, { useEffect, useState } from 'react';
import './TabCheck.css';
import SearchIcon from '@mui/icons-material/Search';

const Tab_Work = (props) => {
  const worklist = ['문서작업', '운동', '코딩', '영상작업'];
  const [work, setWork] = useState(['일']);
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
    props.onChangeWork(work);
  };

  useEffect(() => {
    console.log('렌더링');
  }, [changeTitle()]);

  const checkHandler = (e) => {
    switch (e.target.value) {
      case worklist[0]:
        if (e.target.checked === true) {
          if (count === 0) {
            setWork(worklist[0]);
            plus();
          } else {
            setWork((pre) => {
              return [...pre, worklist[0]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setWork(['일']);
            minus();
          } else {
            const cc = work.filter((word) => word !== worklist[0]);
            setWork(cc);
            minus();
          }
        }
        break;
      case worklist[1]:
        if (e.target.checked === true) {
          if (count === 0) {
            setWork(worklist[1]);
            plus();
          } else {
            setWork((pre) => {
              return [...pre, worklist[1]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setWork(['일']);
            minus();
          } else {
            const cc = work.filter((word) => word !== worklist[1]);
            setWork(cc);
            minus();
          }
        }
        break;
      case worklist[2]:
        if (e.target.checked === true) {
          if (count === 0) {
            setWork(worklist[2]);
            plus();
          } else {
            setWork((pre) => {
              return [...pre, worklist[2]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setWork(['일']);
            minus();
          } else {
            const cc = work.filter((word) => word !== worklist[2]);
            setWork(cc);
            minus();
          }
        }
        break;
      case worklist[3]:
        if (e.target.checked === true) {
          if (count === 0) {
            setWork(worklist[3]);
            plus();
          } else {
            setWork((pre) => {
              return [...pre, worklist[3]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setWork(['일']);
            minus();
          } else {
            const cc = work.filter((word) => word !== worklist[3]);
            setWork(cc);
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
          <input
            type="checkbox"
            name="work"
            value={worklist[0]}
            onChange={(e) => checkHandler(e)}
          />
          {worklist[0]}
        </div>
        <div>
          <input
            type="checkbox"
            name="work"
            value={worklist[1]}
            onChange={(e) => checkHandler(e)}
          />
          {worklist[1]}
        </div>
        <div>
          <input
            type="checkbox"
            name="work"
            value={worklist[2]}
            onChange={(e) => checkHandler(e)}
          />
          {worklist[2]}
        </div>
        <div>
          <input
            type="checkbox"
            name="work"
            value={worklist[3]}
            onChange={(e) => checkHandler(e)}
          />
          {worklist[3]}
        </div>
      </div>
      <div className="searchbox">
        <input type="text" placeholder="검색"></input>
        <SearchIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Tab_Work;
