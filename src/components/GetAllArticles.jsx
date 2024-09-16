import axios from "axios";

const articleAPI = axios.create({
  baseURL: "https://lizzie-hughes-nc-news-project.onrender.com/api",
});

export default function GetAllArticles() {
  return articleAPI
    .get("/articles")
    .then((response) => {
      return response.data.articlesWithComments;
    })
    .catch((err) => console.log(err));
}
