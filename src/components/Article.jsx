import { useState } from "react";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentByArticleID, getSingleArticle } from "../api/APICalls";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSingleArticle(article_id).then((response) => {
      setArticle(response);
    });
  }, [article_id]);

  useEffect(() => {
    getCommentByArticleID(article_id).then(
      (response) => {
        setComments(response);
      },
      [article_id]
    );
  });
  return (
    <div className="single-article">
      <p>Topic: {article.topic}</p>
      <h2>{article.title}</h2>
      <img src={article.article_img_url} className="article-img" />
      <h3>Written by: {article.author}</h3>
      <p>{article.body}</p>
      <div className="comment-grid-container">
        {comments.map((comment) => {
          return (
            <ul key={comment.comment_id} className="comment-grid-item">
              <li className="comment-body">{comment.body} </li>
              <li>
                By: {comment.author} <br />
                Votes: {comment.votes}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
