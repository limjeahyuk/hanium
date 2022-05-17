import React, { useEffect, useState } from 'react';
import './TabCheck.css';

import SearchIcon from '@mui/icons-material/Search';

const Tab_Date = (props) => {
  const datelist = ['하루', '일주일', '10일', '언제나'];
  const [date, setdate] = useState(['날짜']);
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
    props.onChangeDate(date);
  };

  useEffect(() => {
    console.log('렌더링');
  }, [changeTitle()]);

  const checkHandler = (e) => {
    switch (e.target.value) {
      case datelist[0]:
        if (e.target.checked === true) {
          if (count === 0) {
            setdate(datelist[0]);
            plus();
          } else {
            setdate((pre) => {
              return [...pre, datelist[0]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setdate(['날짜']);
            minus();
          } else {
            const cc = date.filter((word) => word !== datelist[0]);
            setdate(cc);
            minus();
          }
        }
        break;
      case datelist[1]:
        if (e.target.checked === true) {
          if (count === 0) {
            setdate(datelist[1]);
            plus();
          } else {
            setdate((pre) => {
              return [...pre, datelist[1]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setdate(['날짜']);
            minus();
          } else {
            const cc = date.filter((word) => word !== datelist[1]);
            setdate(cc);
            minus();
          }
        }
        break;
      case datelist[2]:
        if (e.target.checked === true) {
          if (count === 0) {
            setdate(datelist[2]);
            plus();
          } else {
            setdate((pre) => {
              return [...pre, datelist[2]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setdate(['날짜']);
            minus();
          } else {
            const cc = date.filter((word) => word !== datelist[2]);
            setdate(cc);
            minus();
          }
        }
        break;
      case datelist[3]:
        if (e.target.checked === true) {
          if (count === 0) {
            setdate(datelist[3]);
            plus();
          } else {
            setdate((pre) => {
              return [...pre, datelist[3]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setdate(['날짜']);
            minus();
          } else {
            const cc = date.filter((word) => word !== datelist[3]);
            setdate(cc);
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
            name="date"
            value={datelist[0]}
            onChange={(e) => checkHandler(e)}
          />
          {datelist[0]}
        </div>
        <div>
          <input
            type="checkbox"
            name="date"
            value={datelist[1]}
            onChange={(e) => checkHandler(e)}
          />
          {datelist[1]}
        </div>
        <div>
          <input
            type="checkbox"
            name="date"
            value={datelist[2]}
            onChange={(e) => checkHandler(e)}
          />
          {datelist[2]}
        </div>
        <div>
          <input
            type="checkbox"
            name="date"
            value={datelist[3]}
            onChange={(e) => checkHandler(e)}
          />
          {datelist[3]}
        </div>
      </div>
      <div className="searchbox">
        <input type="text" placeholder="검색"></input>
        <SearchIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Tab_Date;
