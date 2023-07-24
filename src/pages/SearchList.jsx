import React from 'react';
import Card from './Card';

function SearchList({ articles }) {
  const filtered = articles.map((article) => (
    <Card key={article.id} article={article} />
  ));
  return <div>{filtered}</div>;
}

export default SearchList;
