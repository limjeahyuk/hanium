import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CircleIcon from '@mui/icons-material/Circle';

const BuyOrder = () => {
  const ordertitle = ['정렬조건', '등록일순', '포인트순', '즐겨찾기'];

  const [orderIndex, setOrderIndex] = useState(0);

  const tabClickHandler = (index) => {
    setOrderIndex(index);
  };

  const ordermap = ordertitle.map((order, index) => (
    <span key={index} onClick={() => tabClickHandler(index)}>
      {orderIndex === index ? (
        <CheckIcon style={{ color: 'red' }} />
      ) : (
        <CircleIcon style={{ fontSize: '5px' }} />
      )}
      {order}
    </span>
  ));

  return <div className="order">{ordermap}</div>;
};

export default BuyOrder;
