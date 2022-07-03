import React, { useState } from 'react';
import classes from './login.module.css';
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
    if (e.key === 'Enter') {
      onClickLogin();
    }
  };
  // 촬영 전용
  const clickHandler = () => {
    document.location.href = '/college-mate/buy/read';
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
        } else {
          console.log('bad');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={classes.loginForm}>
      <h2>로그인</h2>
      <div className={classes.l_content}>
        <div className={classes.Form}>
          <div>
            <BadgeIcon className={classes.icon} />
            <input
              type='text'
              name='id'
              value={inputId}
              onChange={handleInputId}
              className={classes.box}
              placeholder='아이디를 입력하세요'
            />
          </div>
          <div>
            <LockIcon className={classes.icon} />
            <input
              type='password'
              name='pw'
              value={inputPw}
              className={classes.box}
              onChange={handleInputPw}
              onKeyPress={onKeyPress}
              placeholder='비밀번호를 입력하세요'
            />
          </div>
          <Link to='/sign'>Forget Password?</Link>
          <button className={classes.login_btn} onClick={clickHandler} /* onClick={onClickLogin} */>
            로그인
          </button>
        </div>
        <span>
          <p>New here? </p>
          <Link to='/college-mate/sign'>Create on Account</Link>
        </span>
      </div>
    </div>
  );
}

export default Login_r;
