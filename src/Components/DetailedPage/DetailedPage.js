import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../Header/Header';
import { cleanDate } from '../../APICalls/utilities';
import './DetailedPage.css';

export const DetailedPage = ({ news }) => {
  const { title } = useParams();
  const article = news.find((a) => a.title === decodeURIComponent(title));

  if (!article) {
    return <div>Error...</div>;
  }

  return (
    <div className="details">
      <Header />
      <div className="details-wrapper">
        <div className="details-text">
          <h2 className="detail-title">{article.title}</h2>
          <p className="detail">Source: {article.source.name}</p>
          <p className="detail">
            Date Published: {cleanDate(article.publishedAt)}
          </p>
          <p className="detail">{article.description}</p>
          <p className="detail">{article.content}</p>
          <p className="detail">
          <a href={article.url} className="link" target="_blank" rel="noopener noreferrer">
            Click here to visit the original article
          </a>
        </p>
        </div>
        <img src={article.urlToImage} alt="news" className="detail-img" />
      </div>
    </div>
  );
};
