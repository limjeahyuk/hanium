import React from 'react';
import './login.css';
import BadgeIcon from '@mui/icons-material/Badge';
import LockIcon from '@mui/icons-material/Lock';

function Login_r() {
  return (
    <div className="loginForm">
      <h2>로그인</h2>
      <div className="l_content">
        <form>
          <div>
            <BadgeIcon className="icon" />
            <input type="text" name="id" className="box" placeholder="아이디를 입력하세요" />
          </div>
          <div>
            <LockIcon className="icon" />
            <input type="password" name="pw" className="box" placeholder="비밀번호를 입력하세요" />
          </div>
          <a href="#">Forget Password?</a>
          <button className="login_btn">
            <input type="submit" value="Login" />
          </button>
        </form>
        <span>
          <p>New here? </p>
          <a href="#">Create on Account</a>
        </span>
      </div>
    </div>
  );
}

export default Login_r;
