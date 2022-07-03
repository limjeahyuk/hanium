import React from 'react';

import PostboxItem from './PostboxItem';

const Postbox = ({ items }) => {
  const expense = items.map((item) => (
    <PostboxItem
      work={item.work}
      job={item.job}
      cont={item.title}
      long={item.term}
      point={item.point}
      date={item.date}
      progress={item.progress}
    />
  ));

  return <div>{expense}</div>;
};

export default Postbox;
