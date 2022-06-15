import axios from 'axios';
import React, { useState } from 'react';
import Subheader from '../../Header/Subheader';
import Footer from '../../Main/Footer';
import './BuyWrite.css';

const BuyWrite = () => {
  const classlist = ['유교과', '컴공과', '비서과', '호조과', '기계과', '체육과'];
  const fieldlist = ['문서작업', '영상편집', '포토샵', '체육활동', '소개팅', '기타'];
  const deadlist = ['하루', '일주일', '한달', '일년', '언제든'];
  const pointlist = ['1000', '2000', '5000', '10000'];

  const [postTitle, setPostTitle] = useState('');
  const [postCont, setPostCont] = useState('');
  const [classData, setClassData] = useState('');
  const [fieldData, setFieldData] = useState('');
  const [deadData, setDeadData] = useState('');
  const [pointData, setPointData] = useState('');

  // const writemap = classlist.map((item, index) => (
  //   <label key={index} htmlFor={item}>
  //     <input type="checkbox" id={item} name="분류" value={item} />
  //     {item}
  //   </label>
  // ));

  const classClickHandler = (e) => {
    setClassData(e.target.value);
  };

  const fieldClickHandler = (e) => {
    setFieldData(e.target.value);
  };

  const deadClickHandler = (e) => {
    setDeadData(e.target.value);
  };

  const pointClickHandler = (e) => {
    setPointData(e.target.value);
  };

  const titleChangeHandler = (e) => {
    setPostTitle(e.target.value);
  };

  const contChangeHandler = (e) => {
    setPostCont(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const totalData = {
      title: postTitle,
      work: fieldData,
      job: classData,
      content: postCont,
      progress: false,
      term: deadData,
      point: pointData,
      date: new Date(),
    };

    axios({
      url: 'http://localhost:8080/college-mate/buy/reg',
      method: 'post',
      data: null,
      params: {
        title: postTitle,
        work: fieldData,
        job: classData,
        content: postCont,
        progress: false,
        term: deadData,
        point: pointData,
        date: new Date(),
      },
    }).catch(function (error) {
      console.log(error);
    });

    console.log('submit');
    console.log(totalData);
  };

  const classmap = classlist.map((item, index) => (
    <label htmlFor={item} key={index}>
      <input type="radio" name="분야" value={item} id={item} onClick={classClickHandler}></input>
      {item}
    </label>
  ));

  const fieldmap = fieldlist.map((item, index) => (
    <label htmlFor={item} key={index}>
      <input type="radio" name="분류" value={item} id={item} onClick={fieldClickHandler}></input>
      {item}
    </label>
  ));

  const deadmap = deadlist.map((item, index) => (
    <label htmlFor={item} key={index}>
      <input type="radio" name="마감일" value={item} id={item} onClick={deadClickHandler}></input>
      {item}
    </label>
  ));

  const pointmap = pointlist.map((item, index) => (
    <label htmlFor={item} key={index}>
      <input type="radio" name="포인트" value={item} id={item} onClick={pointClickHandler}></input>
      {item}
    </label>
  ));

  return (
    <div>
      <Subheader />
      <form className="writebox" onSubmit={submitHandler}>
        <div className="condition">
          <h3>재능사기 조건</h3>
          <div className="boxbar"></div>
          <div className="classbox">
            <div className="class">
              <span>분류</span>
              {classmap}
            </div>
            <div className="class">
              <span>분야</span>
              {fieldmap}
            </div>
            <div className="class">
              <span>마감일</span>
              {deadmap}
            </div>
            <div className="class">
              <span>포인트</span>
              {pointmap}
            </div>
          </div>
          <div className="buypostbox">
            <h3>모집내용</h3>
            <div className="boxbar"></div>
            <div className="posttitle">
              <span>제목</span>
              <input type="text" value={postTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="postcont">
              <span>내용</span>
              <textarea value={postCont} onChange={contChangeHandler}></textarea>
            </div>
          </div>
        </div>

        <button type="submit">등록하기</button>
      </form>
      <Footer />
    </div>
  );
};

export default BuyWrite;
