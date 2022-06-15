import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

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
    <div className="postbox">
      <div onClick={starClickHandler}>
        {star ? <StarIcon style={{ color: 'yellow' }} /> : <StarBorderIcon />}
      </div>
      <span>{props.work}</span>
      <span>{props.job}</span>
      <Link to="/college-mate/buy/read/post" className="postcon">
        <p>{props.cont}</p>
        <span className={props.progress ? 'yes' : ''}>진행중</span>
        <span className={props.progress ? '' : 'yes'}>거래완료</span>
      </Link>
      <span>{props.long}</span>
      <span>{props.point}</span>
      <span>{props.date}</span>
    </div>
  );
};

export default PostboxItem;
