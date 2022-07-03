import React, { useEffect, useState } from 'react';
import TabDate from './TabDate';
import TabJob from './TabJob';
import TabPoint from './TabPoint';
import TabWork from './TabWork';
import classes from './TabContent.module.css';

const TabContent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [workTitle, setWorkTitle] = useState(['일']);
  const [jobTitle, setJobTitle] = useState(['직종']);
  const [dateTitle, setDateTitle] = useState(['날짜']);
  const [pointTitle, setPointTitle] = useState(['포인트']);

  const tabClickHandler = (index) => {
    setTabIndex(index);
  };

  const workChangeHandler = (selectwork) => {
    setWorkTitle(selectwork);
  };

  const jobChangeHandler = (selectjob) => {
    setJobTitle(selectjob);
  };

  const dateChangeHandler = (selectdate) => {
    setDateTitle(selectdate);
  };

  const pointChangeHandler = (selectpoint) => {
    setPointTitle(selectpoint);
  };

  // useEffect(() => {
  //   console.log('렌더링');
  // }, [setWorkTitle]);

  const tabcont = [
    {
      tabTitle: (
        <li className={tabIndex === 0 ? `${classes.show}` : ''} onClick={() => tabClickHandler(0)}>
          {workTitle.toString()}
        </li>
      ),
      tabCont: <TabWork onChangeWork={workChangeHandler} />,
    },
    {
      tabTitle: (
        <li className={tabIndex === 1 ? `${classes.show}` : ''} onClick={() => tabClickHandler(1)}>
          {jobTitle.toString()}
        </li>
      ),
      tabCont: <TabJob onChangeJob={jobChangeHandler} />,
    },
    {
      tabTitle: (
        <li className={tabIndex === 2 ? `${classes.show}` : ''} onClick={() => tabClickHandler(2)}>
          {dateTitle.toString()}
        </li>
      ),
      tabCont: <TabDate onChangeDate={dateChangeHandler} />,
    },
    {
      tabTitle: (
        <li className={tabIndex === 3 ? `${classes.show}` : ''} onClick={() => tabClickHandler(3)}>
          {pointTitle.toString()}
        </li>
      ),
      tabCont: <TabPoint onChangePoint={pointChangeHandler} />,
    },
  ];

  return (
    <div className={classes.tab_content}>
      <ul className={classes.tabs}>
        {tabcont.map((section) => {
          return section.tabTitle;
        })}
      </ul>
      <div className={classes.check}>{tabcont[tabIndex].tabCont}</div>
    </div>
  );
};

export default TabContent;
