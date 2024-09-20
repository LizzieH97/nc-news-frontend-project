import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, upVoteArticle } from "../api/APICalls";
import Comments from "./Comments";
import { UserContext } from "../contexts/UserContext";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [vote, setVote] = useState(0);
  const { user } = useContext(UserContext);
  useEffect(() => {
    getSingleArticle(article_id).then((response) => {
      setArticle(response);
    });
  }, [article_id]);
  const handleUp = () => {
    setVote((current_vote) => current_vote + 1);
    upVoteArticle(article_id, 1).then((response) => {});
  };
  const handleDown = () => {
    setVote((current_vote) => current_vote - 1);
    upVoteArticle(article_id, -1).then((response) => {});
  };
  return (
    <div className="single-article">
      <p>Topic: {article.topic}</p>
      <h2>{article.title}</h2>
      <img src={article.article_img_url} className="article-img" />
      <h3>Written by: {article.author}</h3>
      <p>{article.body}</p>
      <p>Votes: {vote + article.votes}</p>
      <button onClick={handleUp}>Wow!</button>
      <button onClick={handleDown}>No!</button>
      <Comments value={article} />
    </div>
  );
}
