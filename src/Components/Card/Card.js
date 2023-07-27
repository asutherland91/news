import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';
import { cleanDate } from '../../APICalls/utilities';

export const Card = ({ article }) => {
  return (
    <NavLink
      to={`/details/${encodeURIComponent(article.title)}`}
      className="card-nav"
    >
      <div id={article.url} className="card">
        <img className="image" src={article.urlToImage} alt="news image" />
        <div className="content-wrapper">
          <h2 className="title">{article.title}</h2>
          <h3 className="description">{article.description}</h3>
          <p className="date">
            Date Published: {cleanDate(article.publishedAt)}
          </p>
        </div>
      </div>
    </NavLink>
  );
};
