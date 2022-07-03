import React, { useEffect, useState } from 'react';
import classes from './BuyPost.module.css';

import BuyOrder from './BuyOrder';
import Postbox from './Postbox';

const BuyPost = (props) => {
  const total = 12;

  const [buyData, setBuyData] = useState([]);

  useEffect(() => {
    setBuyData(props.data);
  }, []);

  const BuyData = [
    {
      work: '문서작업',
      job: '컴공과',
      title: '기본적인 문서작업 부탁드려요',
      progress: true,
      term: '한달',
      point: 1000,
      date: '03-24',
    },
    {
      work: '롱보드',
      job: '유교과',
      title: '롱보드 강의 부탁드려요',
      progress: false,
      term: '하루',
      point: 5000,
      date: '04-22',
    },
    {
      work: '돌봄',
      job: '유교과',
      title: '애기 돌봐주세요',
      progress: true,
      term: '언제든',
      point: 3000,
      date: '10-24',
    },
    {
      work: '구름이',
      job: '유교과',
      title: '애기 돌봐주세요',
      progress: true,
      term: '언제든',
      point: 3000,
      date: '10-24',
    },
    {
      work: '돌봄',
      job: '유교과',
      title: '애기 돌봐주세요',
      progress: true,
      term: '언제든',
      point: 3000,
      date: '10-24',
    },
    {
      work: '돌봄',
      job: '유교과',
      title: '애기 돌봐주세요',
      progress: true,
      term: '언제든',
      point: 3000,
      date: '10-24',
    },
    {
      work: '돌봄',
      job: '유교과',
      title: '애기 돌봐주세요',
      progress: true,
      term: '언제든',
      point: 3000,
      date: '10-24',
    },
  ];

  return (
    <div>
      <div className={classes.bar}>
        <span>재능정보</span>|
        <span>
          총<a href='{()=>false}'>{total}</a>건
        </span>
      </div>
      <BuyOrder />
      <div className={classes.postbar}>
        <span></span>
        <span>분류</span>
        <span>선호</span>
        <span>재능공고</span>
        <span>기한</span>
        <span>포인트</span>
        <span>등록일</span>
      </div>
      <Postbox items={BuyData} />
    </div>
  );
};

export default BuyPost;
