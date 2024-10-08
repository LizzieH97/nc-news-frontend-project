import { useContext, useEffect, useState } from "react";
import {
  getCommentByArticleID,
  postComment,
  deleteCommentByCommentID,
} from "../api/APICalls";
import { useParams } from "react-router-dom";
import Article from "./Article";
import { UserContext } from "../contexts/UserContext";

export default function Comments(props) {
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody] = useState("");
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
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
      username: user,
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
  let canDelete = "";
  const deleteComment = (event) => {
    const author = event.target.attributes[1].nodeValue;
    const comment_id = event.target.value;
    event.preventDefault();

    if (author === user) {
      canDelete += "comment-deletable";
      deleteCommentByCommentID(comment_id).then(() => {});
    } else {
      canDelete += "comment-undeletable";
    }
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
            <button
              onClick={(event) => {
                deleteComment(event);
              }}
              value={comment.comment_id}
              author={comment.author}
              id={canDelete}
            >
              Delete
            </button>
          </ul>
        );
      })}
    </div>
  );
}
