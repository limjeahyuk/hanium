import React from 'react';
import classes from './login.module.css';
import Login_l from './login_left';
import Login_r from './login_right';

function LoginForm() {
  return (
    <div className={classes.content}>
      <div className={classes.content_l}>
        <Login_l />
      </div>
      <div className={classes.content_r}>
        <Login_r />
      </div>
    </div>
  );
}

export default LoginForm;
