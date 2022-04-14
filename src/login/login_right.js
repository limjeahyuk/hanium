import React, { useState, useEffect } from 'react';
import './login.css';
import BadgeIcon from '@mui/icons-material/Badge';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login_r() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  // input data의 변화가 있을 때마다 value에 값을 넣어줌.
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      onClickLogin();
    }
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log('click');
    axios({
      url: 'http://jfox.site/college-mate/login',
      method: 'post',
      data: null,
      params: { username: inputId, password: inputPw },
    })
      .then(function a(response) {
        console.log(response.data);
        if (response.data.response === 'ok') {
          console.log('good');
          document.location.href = '/college-mate/main';
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="loginForm">
      <h2>로그인</h2>
      <div className="l_content">
        <div className="Form">
          <div>
            <BadgeIcon className="icon" />
            <input
              type="text"
              name="id"
              value={inputId}
              onChange={handleInputId}
              className="box"
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div>
            <LockIcon className="icon" />
            <input
              type="password"
              name="pw"
              value={inputPw}
              className="box"
              onChange={handleInputPw}
              onKeyPress={onKeyPress}
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <a href="#">Forget Password?</a>
          <button className="login_btn" onClick={onClickLogin}>
            로그인
          </button>
        </div>
        <span>
          <p>New here? </p>
          <a href="#">Create on Account</a>
        </span>
      </div>
    </div>
  );
}

export default Login_r;
