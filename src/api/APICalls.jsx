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
      return response.data.comments;
    })
    .catch((err) => console.log(err));
};
