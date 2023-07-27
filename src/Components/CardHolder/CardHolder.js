import React from 'react';
import './CardHolder.css';
import { Card } from '../Card/Card';
import { mockData } from '../../MockData/MockData';

export const CardHolder = ({ news, error }) => {
  const newsCards = news.map((article) => {
    return <Card key={article.url} article={article} />;
  });
  return (
    <div className="card-holder">
      <div className="card-wrapper">{newsCards}</div>
    </div>
  );
};
