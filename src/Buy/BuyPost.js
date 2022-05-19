import React from 'react';
import './BuyPost.css';

import BuyOrder from './BuyOrder';
import Postbox from './Postbox';

const BuyPost = () => {
  const total = 22222;

  const BuyData = [
    {
      work: '문서작업',
      job: '컴공과',
      cont: '기본적인 문서작업 부탁드려요',
      progress: true,
      long: '한달',
      point: 1000,
      date: '03-24',
    },
    {
      work: '롱보드',
      job: '유교과',
      cont: '롱보드 강의 부탁드려요',
      progress: false,
      long: '하루',
      point: 5000,
      date: '04-22',
    },
    {
      work: '돌봄',
      job: '유교과',
      cont: '애기 돌봐주세요',
      progress: true,
      long: '언제든',
      point: 3000,
      date: '10-24',
    },
    {
      work: '구름이',
      job: '유교과',
      cont: '애기 돌봐주세요',
      progress: true,
      long: '언제든',
      point: 3000,
      date: '10-24',
    },
    {
      work: '돌봄',
      job: '유교과',
      cont: '애기 돌봐주세요',
      progress: true,
      long: '언제든',
      point: 3000,
      date: '10-24',
    },
    {
      work: '돌봄',
      job: '유교과',
      cont: '애기 돌봐주세요',
      progress: true,
      long: '언제든',
      point: 3000,
      date: '10-24',
    },
    {
      work: '돌봄',
      job: '유교과',
      cont: '애기 돌봐주세요',
      progress: true,
      long: '언제든',
      point: 3000,
      date: '10-24',
    },
  ];

  return (
    <div>
      <div className="bar intro">
        <span>재능정보</span>|
        <span>
          총<a href="{()=>false}">{total}</a>건
        </span>
      </div>
      <BuyOrder />
      <div className="postbar">
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
