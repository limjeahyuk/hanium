import React from 'react';
import classes from './login.module.css';
import SchoolIcon from '@mui/icons-material/School';

function Login_l() {
  return (
    <div className={classes.big}>
      <SchoolIcon className={classes.icon} />
      <h2>대학메이트</h2>
    </div>
  );
}

export default Login_l;
