import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AllArticles from "./components/AllArticles";
import Article from "./components/Article";

function App() {
  return (
    <>
      <>
        <div className="main-grid-container">
          <Header className="header" />
          <NavBar className="nav-bar" />
          <Routes>
            <Route path="/articles" element={<AllArticles />} />
            <Route path="/articles/:article_id" element={<Article />} />
          </Routes>
        </div>
      </>
    </>
  );
}

export default App;
