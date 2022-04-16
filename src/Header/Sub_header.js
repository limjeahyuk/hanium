import React from 'react';
import './header.css';
import { Link } from '@mui/material';

function Sub_header() {
  return (
    <div className="sub_head">
      <div className="sub_menu">
        <Link>Home</Link>
        <div>
          <Link>user</Link>|<Link>로그아웃</Link>
        </div>
      </div>
      <div className="main_menu">
        <Link>재능사기</Link>
        <Link>재능팔기</Link>
        <Link>재능공유</Link>
        <Link>커뮤니티</Link>
        <Link>재능관리</Link>
      </div>
    </div>
  );
}

export default Sub_header;
