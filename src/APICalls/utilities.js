export const cleanNewsData = (newsData) => {
  return newsData.filter((article) => article.author && article.urlToImage);
};

export const cleanDate = (dateString) => {
  const dateObj = new Date(dateString);

  const dateInfo = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
  };

  return dateObj.toLocaleString('en-US', dateInfo);
};
