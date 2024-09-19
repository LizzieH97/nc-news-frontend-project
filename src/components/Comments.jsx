import { useEffect, useState } from "react";
import { getCommentByArticleID, postComment } from "../api/APICalls";
import { useParams } from "react-router-dom";
import Article from "./Article";

export default function Comments(props) {
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody] = useState("");
  const { article_id } = useParams();

  useEffect(() => {
    getCommentByArticleID(article_id).then(
      (response) => {
        setComments(response);
      },
      [article_id]
    );
  });
  const handleChange = (event) => {
    setCommentBody(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      username: "grumpy19",
      body: commentBody,
      article_id: article_id,
      votes: 0,
      comment_id: Date.now(),
    };
    postComment(newComment).then(() => {
      setComments([newComment, ...comments]);
    });
    setCommentBody("");
  };

  return (
    <div className="comment-grid-container">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="comment-post-box">Post a comment!</label>
        <textarea
          id="comment-post-box"
          onChange={(event) => handleChange(event)}
          value={commentBody}
        />
        <button type="submit">Submit!</button>
      </form>

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
