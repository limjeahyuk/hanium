import React from 'react';
import './login.css';
import Login_l from './login_left';
import Login_r from './login_right';

function LoginForm() {
  return (
    <div className="content">
      <div className="content-l">
        <Login_l />
      </div>
      <div className="content-r">
        <Login_r />
      </div>
    </div>
  );
}

export default LoginForm;
