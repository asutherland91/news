import React, { useEffect, useState } from "react";
import { HomePage } from "../HomePage/HomePage";
import { DetailedPage } from "../DetailedPage/DetailedPage";
import { fetchCatArticles } from "../../APICalls/APICalls";
import { cleanNewsData } from "../../APICalls/utilities";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { mockData } from "../../MockData/MockData";

const App = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   fetchCatArticles()
  //     .then((newsData) => {
  //       setNews(cleanNewsData(newsData.articles));
  //       console.log(newsData)
  //     })
  //     .catch((error) => {
  //       if (error instanceof Error) {
  //         setError("Server error.");
  //       } else {
  //         setError("Unknown error.");
  //       }
  //     });
  // }, []);

  useEffect(() => {
    setNews(cleanNewsData(mockData));
  }, []);

  return (
    <Switch>
      <main>
      <Route exact path="/">
          {news.length && <HomePage news={news} error={error} />}
      </Route>
      <Route exact path="/details/:title">
          <DetailedPage news={news} error={error} />
      </Route>
      </main>
    </Switch>
  );
};

export default App;
