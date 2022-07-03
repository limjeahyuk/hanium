import React from 'react';

import Mymenu from './mypage/Mymenu';
import Mycontent from './mypage/Mycontent';
import Subheader from '../Header/Subheader';

function Mypage() {
  return (
    <>
      <Subheader />
      <div className='page_wrap'>
        <Mymenu />
        <Mycontent />
      </div>
    </>
  );
}

export default Mypage;
