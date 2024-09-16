import axios from "axios";

const articleAPI = axios.create({
  baseURL: "https://lizzie-hughes-nc-news-project.onrender.com/api",
});

export default function getArticle(article_id) {
  return articleAPI
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.selectedArticle;
    })
    .catch((err) => console.log(err));
}
