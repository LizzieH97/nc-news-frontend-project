import { useState, useEffect } from "react";
import { getAllArticles } from "../api/APICalls";

import { Link } from "react-router-dom";

export default function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getAllArticles(allArticles).then((gotArticles) => {
      setAllArticles(gotArticles);
    });
  }, []);

  return (
    <div className="article-grid-container">
      {allArticles.map((article) => {
        return (
          <li key={article.article_id} className="article-grid-item">
            <p>Topic: {article.topic}</p>
            <Link to={`/articles/${article.article_id}`}>
              <h2>{article.title}</h2>
            </Link>
            <img src={article.article_img_url} className="article-img" />
            <p>By {article.author}</p>
            <p>Created on: {article.created_at}</p>
          </li>
        );
      })}
    </div>
  );
}
