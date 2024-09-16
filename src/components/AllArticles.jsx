import { useState, useEffect } from "react";
import GetAllArticles from "./GetAllArticles";
import Article from "./Article";

export default function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);
  const [articleID, setArticleID] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    GetAllArticles(allArticles).then((gotArticles) => {
      setAllArticles(gotArticles);
    });
  }, [allArticles]);

  const handleClick = (event) => {
    setIsClicked(!isClicked);
    const selectedArticle = event.target.value || event.target.parentNode.value;
    setArticleID(selectedArticle);
  };

  return isClicked ? (
    <>
      <Article value={articleID} />
    </>
  ) : (
    <div className="article-grid-container">
      {allArticles.map((article) => {
        return (
          <button
            key={article.article_id}
            className="article-grid-item"
            onClick={handleClick}
            value={article.article_id}
          >
            <h2>{article.title}</h2>
            <ul>
              <img src={article.article_img_url} className="article-img" />
              <li>Author: {article.author}</li>
              <li>Topic: {article.topic}</li>
              <li>Votes: {article.votes}</li>
            </ul>
          </button>
        );
      })}
    </div>
  );
}
