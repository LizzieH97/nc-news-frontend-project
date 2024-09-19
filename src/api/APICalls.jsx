import axios from "axios";

const articleAPI = axios.create({
  baseURL: "https://lizzie-hughes-nc-news-project.onrender.com/api",
});

export const getAllArticles = () => {
  return articleAPI
    .get(`/articles`)
    .then((response) => {
      return response.data.articlesWithComments;
    })
    .catch((err) => console.log(err));
};
export const getSingleArticle = (article_id) => {
  return articleAPI
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.selectedArticle;
    })
    .catch((err) => console.log(err));
};
export const getCommentByArticleID = (article_id) => {
  return articleAPI
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      if (response === undefined) {
        return [];
      } else {
        return response.data.comments;
      }
    })
    .catch((err) => {
      return [];
    });
};

export const upVoteArticle = (article_id, inc) => {
  const addVotes = { inc_votes: inc };
  return articleAPI
    .patch(`/articles/${article_id}`, addVotes)
    .then((response) => {
      return response;
    })
    .catch((err, response) => {
      return response;
    });
};
