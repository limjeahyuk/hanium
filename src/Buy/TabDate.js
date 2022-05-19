import React, { useEffect, useState } from 'react';
import './TabCheck.css';

import SearchIcon from '@mui/icons-material/Search';

const TabDate = (props) => {
  const datelist = ['하루', '일주일', '10일', '언제나'];
  const [date, setdate] = useState(['날짜']);
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    props.onChangeDate(date);
  }, [plus, minus]);

  const condition = (e, i) => {
    if (e.target.checked === true) {
      if (count === 0) {
        setdate([datelist[i]]);
        plus();
      } else {
        setdate((pre) => {
          return [...pre, datelist[i]];
        });
        plus();
      }
    } else {
      if (count === 1) {
        setdate(['날짜']);
        minus();
      } else {
        const cc = date.filter((word) => word !== datelist[i]);
        setdate(cc);
        minus();
      }
    }
  };

  const checkHandler = (e) => {
    switch (e.target.value) {
      case datelist[0]:
        condition(e, 0);
        break;
      case datelist[1]:
        condition(e, 1);
        break;
      case datelist[2]:
        condition(e, 2);
        break;
      case datelist[3]:
        condition(e, 3);
        break;
      default:
        break;
    }
  };

  const datemap = datelist.map((date, index) => (
    <label key={index} htmlFor={index}>
      <input
        type="checkbox"
        name="date"
        id={index}
        value={date}
        onChange={(e) => checkHandler(e)}
      />
      {date}
    </label>
  ));

  return (
    <div>
      <div className="question">{datemap}</div>
      <div className="searchbox">
        <input type="text" placeholder="검색"></input>
        <SearchIcon fontSize="large" />
      </div>
    </div>
  );
};

export default TabDate;
