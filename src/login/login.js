import React from 'react';
import './login.css';
import Login_l from './login_left';

function LoginForm() {
  return (
    <div className="content">
      <div className="content-r">
        <Login_l />
      </div>
      <div className="content-l"></div>
    </div>
  );
}

export default LoginForm;
