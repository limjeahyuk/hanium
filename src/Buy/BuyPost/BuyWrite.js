import React from 'react';
import Subheader from '../../Header/Subheader';

const BuyWrite = () => {
  const classlist = ['문서작업', '영상편집', '포토샵', '체육활동', '소개팅', '기타'];
  const fieldlist = [''];
  const deadlist = [];
  const pointlist = [];

  const wirtemap = classlist.map((item, index) => (
    <label key={index} htmlFor={index}>
      <input type="checkbox" id={index} name="분류" value={item} />
      {item}
    </label>
  ));

  return (
    <div>
      <Subheader />
      <div className="writebox">
        <div className="condition">
          <h3>재능사기 조건</h3>
          <div className="boxbar"></div>
          <div className="writecheck class">
            <span>분류</span>
            {wirtemap}
          </div>
          <div className="radio class">
            <span>분야</span>
            <label htmlFor="1">
              <input type="radio" name="분야" value="문서작업" id="1"></input>
              문서작업
            </label>
            <label htmlFor="2">
              <input type="radio" name="분야" value="문서작업" id="2"></input>
              문서작업
            </label>
            <label htmlFor="3">
              <input type="radio" name="분야" value="문서작업" id="3"></input>
              문서작업
            </label>
            <label htmlFor="4">
              <input type="radio" name="분야" value="문서작업" id="4"></input>
              문서작업
            </label>
            <label htmlFor="5">
              <input type="radio" name="분야" value="문서작업" id="5"></input>
              문서작업
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyWrite;
