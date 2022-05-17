import React, { useEffect, useState } from 'react';
import './TabCheck.css';

import SearchIcon from '@mui/icons-material/Search';

const Tab_Point = (props) => {
  const pointlist = ['1000', '2000', '5000', '10000'];
  const [point, setpoint] = useState(['포인트']);
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
    props.onChangePoint(point);
  };

  useEffect(() => {
    console.log('렌더링');
  }, [changeTitle()]);

  const checkHandler = (e) => {
    switch (e.target.value) {
      case pointlist[0]:
        if (e.target.checked === true) {
          if (count === 0) {
            setpoint(pointlist[0]);
            plus();
          } else {
            setpoint((pre) => {
              return [...pre, pointlist[0]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setpoint(['포인트']);
            minus();
          } else {
            const cc = point.filter((word) => word !== pointlist[0]);
            setpoint(cc);
            minus();
          }
        }
        break;
      case pointlist[1]:
        if (e.target.checked === true) {
          if (count === 0) {
            setpoint(pointlist[1]);
            plus();
          } else {
            setpoint((pre) => {
              return [...pre, pointlist[1]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setpoint(['포인트']);
            minus();
          } else {
            const cc = point.filter((word) => word !== pointlist[1]);
            setpoint(cc);
            minus();
          }
        }
        break;
      case pointlist[2]:
        if (e.target.checked === true) {
          if (count === 0) {
            setpoint(pointlist[2]);
            plus();
          } else {
            setpoint((pre) => {
              return [...pre, pointlist[2]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setpoint(['포인트']);
            minus();
          } else {
            const cc = point.filter((word) => word !== pointlist[2]);
            setpoint(cc);
            minus();
          }
        }
        break;
      case pointlist[3]:
        if (e.target.checked === true) {
          if (count === 0) {
            setpoint(pointlist[3]);
            plus();
          } else {
            setpoint((pre) => {
              return [...pre, pointlist[3]];
            });
            plus();
          }
        } else {
          if (count === 1) {
            setpoint(['포인트']);
            minus();
          } else {
            const cc = point.filter((word) => word !== pointlist[3]);
            setpoint(cc);
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
            name="point"
            value={pointlist[0]}
            onChange={(e) => checkHandler(e)}
          />
          {pointlist[0]}
        </div>
        <div>
          <input
            type="checkbox"
            name="point"
            value={pointlist[1]}
            onChange={(e) => checkHandler(e)}
          />
          {pointlist[1]}
        </div>
        <div>
          <input
            type="checkbox"
            name="point"
            value={pointlist[2]}
            onChange={(e) => checkHandler(e)}
          />
          {pointlist[2]}
        </div>
        <div>
          <input
            type="checkbox"
            name="point"
            value={pointlist[3]}
            onChange={(e) => checkHandler(e)}
          />
          {pointlist[3]}
        </div>
      </div>
      <div className="searchbox">
        <input type="text" placeholder="검색"></input>
        <SearchIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Tab_Point;
