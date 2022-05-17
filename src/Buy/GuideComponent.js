import React, { useState } from 'react';
import './GuideComponent.css';

const GuideComponent = () => {
  const [work, setWork] = useState(['일']);
  const [job, setJob] = useState('전공');
  const [date, setDate] = useState('날짜');
  const [point, setPoint] = useState('포인트');

  const checkHandler = (e) => {
    switch (e.target.value) {
      case '문서작업':
        if (e.target.checked === true) {
          if (work[0] === '일') {
            setWork(['문서작업']);
          } else {
            setWork((pre) => {
              return [...pre, '문서작업'];
            });
          }
        } else {
          if (work[0] === '문서작업') {
            setWork(['일']);
          } else {
            const cc = work.filter((word) => word !== '문서작업');
            setWork(cc);
          }
        }
        break;
      case '운동':
        if (e.target.checked === true) {
          if (work[0] === '일') {
            setWork(['운동']);
          } else {
            setWork((pre) => {
              return [...pre, '운동'];
            });
          }
        } else {
          if (work[0] === '운동') {
            setWork(['일']);
          } else {
            const cc = work.filter((word) => word !== '운동');
            setWork(cc);
          }
        }
        break;
      case '코딩':
        if (e.target.checked === true) {
          if (work[0] === '일') {
            setWork(['코딩']);
          } else {
            setWork((pre) => {
              return [...pre, '코딩'];
            });
          }
        } else {
          if (work[0] === '코딩') {
            setWork(['일']);
          } else {
            const cc = work.filter((word) => word !== '코딩');
            setWork(cc);
          }
        }
        break;
      case '영상작업':
        if (e.target.checked === true) {
          if (work[0] === '일') {
            setWork(['영상작업']);
          } else {
            setWork((pre) => {
              return [...pre, '영상작업'];
            });
          }
        } else {
          if (work[0] === '영상작업') {
            setWork(['일']);
          } else {
            const cc = work.filter((word) => word !== '영상작업');
            setWork(cc);
          }
        }
        break;
    }
  };

  return (
    <div>
      <div className="guide">
        <li>{work}</li>
        <li>{job}</li>
        <li>{date}</li>
        <li>{point}</li>
      </div>
      <div>
        <input type="checkbox" name="work" value="문서작업" onChange={(e) => checkHandler(e)} />
        문서작업
        <input type="checkbox" name="work" value="운동" onChange={(e) => checkHandler(e)} />
        운동
        <input type="checkbox" name="work" value="코딩" onChange={(e) => checkHandler(e)} />
        코딩
        <input type="checkbox" name="work" value="영상작업" onChange={(e) => checkHandler(e)} />
        영상작업
      </div>
    </div>
  );
};

export default GuideComponent;
