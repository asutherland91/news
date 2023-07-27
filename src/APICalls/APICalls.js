export const fetchCatArticles = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=+cats&apiKey=601d6f9bb38f4139b6ee7a247b0a1994`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Please try again, there is an error. code: ${response.status}`
      );
    }
};

