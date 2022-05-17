import React, { useEffect, useState } from 'react';
import Tab_Date from './Tab_Date';
import Tab_Job from './Tab_Job';
import Tab_Point from './Tab_Point';
import Tab_Work from './Tab_Work';
import './TabContent.css';

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
    console.log(selectwork);
    setWorkTitle(selectwork);
  };

  const jobChangeHandler = (selectjob) => {
    console.log(selectjob);
    setJobTitle(selectjob);
  };

  const dateChangeHandler = (selectdate) => {
    console.log(selectdate);
    setDateTitle(selectdate);
  };

  const pointChangeHandler = (selectpoint) => {
    console.log(selectpoint);
    setPointTitle(selectpoint);
  };

  useEffect(() => {
    console.log('렌더링');
  });

  const tabcont = [
    {
      tabTitle: (
        <li className={tabIndex === 0 ? 'show' : ''} onClick={() => tabClickHandler(0)}>
          {workTitle.toString()}
        </li>
      ),
      tabCont: <Tab_Work onChangeWork={workChangeHandler} />,
    },
    {
      tabTitle: (
        <li className={tabIndex === 1 ? 'show' : ''} onClick={() => tabClickHandler(1)}>
          {jobTitle.toString()}
        </li>
      ),
      tabCont: <Tab_Job onChangeJob={jobChangeHandler} />,
    },
    {
      tabTitle: (
        <li className={tabIndex === 2 ? 'show' : ''} onClick={() => tabClickHandler(2)}>
          {dateTitle.toString()}
        </li>
      ),
      tabCont: <Tab_Date onChangeDate={dateChangeHandler} />,
    },
    {
      tabTitle: (
        <li className={tabIndex === 3 ? 'show' : ''} onClick={() => tabClickHandler(3)}>
          {pointTitle.toString()}
        </li>
      ),
      tabCont: <Tab_Point onChangePoint={pointChangeHandler} />,
    },
  ];

  return (
    <div className="tab_content">
      <ul className="tabs">
        {tabcont.map((section, index) => {
          return section.tabTitle;
        })}
      </ul>
      <div className="check">{tabcont[tabIndex].tabCont}</div>
    </div>
  );
};

export default TabContent;
