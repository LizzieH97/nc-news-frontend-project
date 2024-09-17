import { useState } from "react";
import getArticle from "./GetArticle";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Article(articleID) {
  const { article_id } = useParams();
  const bothArticleID = article_id || articleID.value;
  const [article, setArticle] = useState({});
  useEffect(() => {
    getArticle(bothArticleID).then((response) => {
      setArticle(response);
    });
  }, [bothArticleID]);

  return (
    <div className="single-article">
      <p>Topic: {article.topic}</p>
      <h2>{article.title}</h2>
      <img src={article.article_img_url} className="article-img" />
      <h3>Written by: {article.author}</h3>
      <p>{article.body}</p>
    </div>
  );
}
