import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GetAllArticles from "./GetAllArticles";

export default function AllArticles() {
  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    GetAllArticles(Articles).then((allArticles) => {
      setArticles(allArticles);
    });
  }, [Articles]);

  return (
    <div className="article-grid-container">
      {Articles.map((article) => {
        return (
          <div key={article.article_id} className="article-grid-item">
            <h2>{article.title}</h2>
            <ul>
              <img src={article.article_img_url} className="article-img" />
              <li>Author: {article.author}</li>
              <li>Topic: {article.topic}</li>
              <li>Votes: {article.votes}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
