import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewArticle from "./components/NewArticle";
import Login from "./components/Login";
import ReadArticle from "./components/ReadArticle";
import NewCategory from "./components/NewCategory";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/admin" element={<Login />} />
          <Route path="/article/create" element={<NewArticle />} />
          <Route path="/article/edit" element={<NewArticle />} />
          <Route path="/read" element={<ReadArticle />} />
          <Route path="/category/create" element={<NewCategory />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
