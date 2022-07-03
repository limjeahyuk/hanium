import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../css/Mypage.css';
import img from '../img/profile.jpg';

function Mymenu() {
  const [IsOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((IsOpen) => !IsOpen);
  };

  return (
    <div className='wrap'>
      <div className='profile'>
        <img src={img} alt='프로필 사진' />
      </div>
      <div className='name'>박수정</div>
      <button className='btn'>프로필 관리</button>
      <div className='menu_list'>
        <ul className='all_menu'>
          <li>
            재능 일기<KeyboardArrowDownIcon className='pls'></KeyboardArrowDownIcon>
          </li>
          <li>재능 내역</li>
          <li onClick={onClick}>
            포인트 사용 내역<KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            <ul className={IsOpen ? 'show' : 'hide'}>
              <li>전체 (5)</li>
              <li>진행중 (5)</li>
              <li>완료 (5)</li>
              <li>상점이용 (5)</li>
            </ul>
          </li>
          <li>포인트 상점</li>
        </ul>
      </div>
    </div>
  );
}

export default Mymenu;
