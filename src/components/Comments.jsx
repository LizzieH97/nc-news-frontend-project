import { useEffect, useState } from "react";
import { getCommentByArticleID } from "../api/APICalls";
import { useParams } from "react-router-dom";
import Article from "./Article";

export default function Comments(props) {
  const [comments, setComments] = useState([]);
  const [singleComment, setSingleComment] = useState({});

  const { article_id } = useParams();

  useEffect(() => {
    getCommentByArticleID(article_id).then(
      (response) => {
        setComments(response);
      },
      [article_id]
    );
  });

  return (
    <div className="comment-grid-container">
      {comments.map((comment) => {
        return (
          <ul key={comment.comment_id} className="comment-grid-item">
            <li className="comment-body">{comment.body} </li>
            <li>
              <p>
                Author: {comment.author} <br />
              </p>
              <p className="votes">Votes: {comment.votes}</p>
            </li>
            <div>
              <button>Wow!</button>
              <button>No!</button>
            </div>
          </ul>
        );
      })}
    </div>
  );
}
