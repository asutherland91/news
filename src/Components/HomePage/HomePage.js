import React, { useState } from 'react';
import './HomePage.css';
import { Header } from '../Header/Header';
import { CardHolder } from '../CardHolder/CardHolder';

export const HomePage = ({ news, error }) => {
  const [search, setSearch] = useState('');
  const [filteredNews, setFilteredNews] = useState(news);

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    if (!search) {
      setFilteredNews(news);
    } else {
      const filteredArticles = news.filter((article) => {
        const keyword = search.toLowerCase();
        return article.title.toLowerCase().includes(keyword);
      });

      setFilteredNews(filteredArticles);
    }
  };

  return (
    <div className="news-grid">
      <Header />
      <div>
        <h2 className="card-holder-title">Daily Cat News</h2>
        <input
          type="text"
          value={search}
          onChange={handleSearchInputChange}
          placeholder="Search"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <CardHolder news={filteredNews} error={error} />
    </div>
  );
};
