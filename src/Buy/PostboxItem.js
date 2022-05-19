import React, { useState } from 'react';
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
        {star === true ? <StarIcon style={{ color: 'yellow' }} /> : <StarBorderIcon />}
      </div>
      <span>{props.work}</span>
      <span>{props.job}</span>
      <div className="postcon">
        <p>{props.cont}</p>
        <span className={props.progress === true ? 'yes' : ''}>진행중</span>
        <span className={props.progress === true ? '' : 'yes'}>거래완료</span>
      </div>
      <span>{props.long}</span>
      <span>{props.point}</span>
      <span>{props.date}</span>
    </div>
  );
};

export default PostboxItem;
