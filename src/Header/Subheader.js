import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Subheader = () => {
  const menus = [
    {
      id: 'm1',
      url: '/college-mate/buy/read',
      title: '재능사기',
    },
    {
      id: 'm2',
      url: '/college-mate/buy/read',
      title: '재능팔기',
    },
    {
      id: 'm3',
      url: '/college-mate/buy/read',
      title: '재능공유',
    },
    {
      id: 'm4',
      url: '/college-mate/buy/read',
      title: '커뮤니티',
    },
    {
      id: 'm5',
      url: '/college-mate/mypage',
      title: '재능관리',
    },
  ];

  // const buyClickHandler = () => {
  //   console.log('dd');
  // };

  const menuList = menus.map((menu) => (
    <Link to={menu.url} key={menu.id}>
      {menu.title}
    </Link>
  ));

  return (
    <div className='sub_head'>
      <div className='sub_menu'>
        <Link to='/college-mate/main'>Home</Link>
        <div>
          <Link to='/my'>user</Link>|<Link to='/main'>로그아웃</Link>
        </div>
      </div>
      <div className='main_menu'>{menuList}</div>
    </div>
  );
};

export default Subheader;
