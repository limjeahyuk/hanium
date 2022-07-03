import { useState } from 'react';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupIcon from '@mui/icons-material/Group';

import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Subheader from '../Header/Subheader';

const obj = {
  0: <First />,
  1: <Second />,
  2: <Third />,
  3: <Fourth />,
};

function Mypage_other() {
  const arr = ['소개', '기부정보', '재능일기', '후기'];
  const [active, setActive] = useState(0);

  const clickHandler = (id) => {
    setActive(id);
  };

  return (
    <div>
      <Subheader />
      <div className='profile_wrap'>
        <div className='profile_other'></div>
        <div className='profile_box'>
          <div className='profile_name'>박수정</div>
          <div>
            <CardGiftcardIcon />
            <span className='graph'></span>
            <span>100</span>
          </div>
          <div>
            <MenuBookIcon />
            <span className='graph'></span>
            <span>50</span>
          </div>
          <div>
            <GroupIcon />
            <span className='graph'></span>
            <span>60</span>
          </div>
        </div>
        <button>프로필 수정</button>
      </div>
      <div className='tab_wrap'>
        <ul>
          {arr.map((str, idx) => {
            return (
              <li key={str} onClick={() => clickHandler(idx)}>
                {str}
              </li>
            );
          })}
        </ul>
        <div className='contents'>
          <div>{obj[active]}</div>
        </div>
      </div>
    </div>
  );
}

export default Mypage_other;
