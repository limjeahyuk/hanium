import React from 'react';
import './BuyRead.css';
import Subheader from '../../Header/Subheader';
import Footer from '../../Main/Footer';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import ImgA from './image.png';
import FavoriteIcon from '@mui/icons-material/Favorite';

const BuyRead = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

  return (
    <div className="buyread">
      <Subheader />
      <div className="contbox">
        <div className="cont">
          <div className="title">
            <span>개졸려</span>
            <div className="name">
              <span>혁쨩</span>
              <p>2017.4.4</p>
            </div>
          </div>
          <div className="bar"></div>
          <div className="icon">
            <CreateIcon />
            <DeleteIcon />
          </div>
          <div className="imgbox">
            <img src={ImgA} alt="바다" />
          </div>
          <div className="pbox">
            <p>{lorem}</p>
          </div>
          <div className="likebox">
            <FavoriteIcon />
            <span>30</span>
          </div>
          <div className="bar"></div>
          <div className="comment">
            <span>작성자</span>
            <span>글입니다아아아아아아아아아</span>
            <span>2022.02.02</span>
          </div>
          <form className="commentbox">
            <div>
              <textarea placeholder="댓글 작성"></textarea>
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
