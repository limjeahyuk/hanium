import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import classes from './BuyPost.module.css';

const PostboxItem = (props) => {
  const [star, setStar] = useState(false);
  const starClickHandler = () => {
    if (star === true) {
      setStar(false);
      console.log(star);
    } else {
      setStar(true);
      console.log(star);
    }
  };

  return (
    <div className={classes.postbox}>
      <div onClick={starClickHandler}>
        {star ? <StarIcon style={{ color: 'yellow' }} /> : <StarBorderIcon />}
      </div>
      <span>{props.work}</span>
      <span>{props.job}</span>
      <Link to='/college-mate/buy/read/post' className={classes.postcon}>
        <p>{props.cont}</p>
        <span className={props.progress ? `${classes.yes}` : ''}>진행중</span>
        <span className={props.progress ? '' : `${classes.yes}`}>거래완료</span>
      </Link>
      <span>{props.long}</span>
      <span>{props.point}</span>
      <span>{props.date}</span>
    </div>
  );
};

export default PostboxItem;
