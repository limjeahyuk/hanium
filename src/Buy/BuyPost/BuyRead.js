import React from 'react';
import classes from './BuyRead.module.css';
import Subheader from '../../Header/Subheader';
import Footer from '../../Main/Footer';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import ImgA from './image.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const BuyRead = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

  return (
    <div className={classes.buyread}>
      <Subheader />
      <div className={classes.contbox}>
        <div className={classes.cont}>
          <div className={classes.title}>
            <span>개졸려</span>
            <div className={classes.name}>
              <span>혁쨩</span>
              <p>2017.4.4</p>
            </div>
          </div>
          <div className={classes.bar}></div>
          <div className={classes.icon}>
            <CreateIcon />
            <DeleteIcon />
          </div>
          <div className={classes.imgbox}>
            <img src={ImgA} alt='바다' />
          </div>
          <div className={classes.pbox}>
            <p>{lorem}</p>
          </div>
          <div className={classes.likebox}>
            <FavoriteIcon />
            <span>30</span>
          </div>
          <div className={classes.bar}></div>
          <div className={classes.comment}>
            <Link to='/college-mate/mypageother'>
              <span>USER2</span>
            </Link>
            <span>안녕하세요 부탁드릴 수 있을까요?</span>
            <span>2022.02.02</span>
          </div>
          <form className={classes.commentbox}>
            <div>
              <textarea placeholder='댓글 작성'></textarea>
            </div>
            <button>작성</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyRead;
