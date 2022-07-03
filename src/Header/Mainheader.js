import React from 'react';
import './header.css';

function Mainheader() {
  return (
    <div className="h_content">
      <div>
        <div className="t_content">
          <a href="{()=>false}">Main</a>
          <div>
            <a href="{()=>false}">USER</a>|<a href="{()=>false}">로그아웃</a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Mainheader;
