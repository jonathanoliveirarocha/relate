import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewArticle from "./components/NewArticle";
import Login from "./components/Login";
import ReadArticle from "./components/ReadArticle";
import NewCategory from "./components/NewCategory";
import NotFound from "./components/NotFound";

const App = () => {
  const [search, setSearch] = useState("")
  return (
    <>
      <Header search={search} setSearch={setSearch}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home search={search} setSearch={setSearch}/>} />
          <Route path="/read/:id" element={<ReadArticle />} />
          <Route path="/auth/admin" element={<Login />} />
          <Route path="/article/create" element={<NewArticle />} />
          <Route path="/article/edit/:id" element={<NewArticle />} />
          <Route path="/category/create" element={<NewCategory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
