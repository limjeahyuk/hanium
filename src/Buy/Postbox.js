import React from 'react';

import PostboxItem from './PostboxItem';

const Postbox = (props) => {
  const expense = props.items.map((item) => (
    <PostboxItem
      work={item.work}
      job={item.job}
      cont={item.cont}
      long={item.long}
      point={item.point}
      date={item.date}
      progress={item.progress}
    />
  ));

  return <div>{expense}</div>;
};

export default Postbox;
