import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AllArticles from "./components/AllArticles";
import Article from "./components/Article";
import Comments from "./components/Comments";
import AllUsers from "./components/AllUsers";
import AllCategories from "./components/AllCategories";

function App() {
  return (
    <>
      <>
        <div className="main-grid-container">
          <Header className="header" />
          <NavBar className="nav-bar" />
          <Routes>
            <Route path="/articles" element={<AllArticles />} />
            <Route path="/articles/:article_id/*" element={<Article />} />
            <Route
              path="/articles/:article_id/comments/comment_id"
              element={Comments}
            />
            <Route path="/users" element={<AllUsers />} />
            {/* <Route path="/articles?*" element={<AllCategories />} /> */}
          </Routes>
        </div>
      </>
    </>
  );
}

export default App;
