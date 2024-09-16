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
    <div className="item-grid-container">
      <h2 className="header-of-grid">Select your item:</h2>
      {Articles.map((article) => {
        return (
          <div key={article.article_id} className="items">
            <ul>
              <img src={article.article_img_url} />
              <li>Title: {article.title}</li>
              <li>ID: {article.article_id}</li>
              <li>Author: {article.author}</li>
              <li>Created at: {article.created_at}</li>
              <li>Topic: {article.topic}</li>
              <li>Votes: {article.votes}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
