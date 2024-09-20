import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../api/APICalls";

export default function AllCategories() {
  console.log("I got to here");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getArticlesByTopic(topic).then((response) => {
      setCategories(response);
      console.log(categories);
    });
  });
  return (
    <div className="article-grid-container">
      {categories.map((category) => {
        return (
          <li key={category.slug} className="article-grid-item">
            {category.slug}
          </li>
        );
      })}
    </div>
  );
}
