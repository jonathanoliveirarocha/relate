import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { authService } from "./api/auth.service";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewArticle from "./components/NewArticle";
import Login from "./components/Login";
import ReadArticle from "./components/ReadArticle";
import NewCategory from "./components/NewCategory";
import NotFound from "./components/NotFound";

const App = () => {
  const tokenStorage = JSON.parse(localStorage.getItem("tokenStorage")) || null;
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(tokenStorage);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await authService.verifyAuth(token);
      response ? setIsAuthenticated(true) : setIsAuthenticated(false);
    };
    
    fetchData();
  }, [token]);

  return (
    <>
      <Header
        search={search}
        isAuthenticated={isAuthenticated}
        setToken={setToken}
        setSearch={setSearch}
        location={location}
      />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                search={search}
                setSearch={setSearch}
                isAuthenticated={isAuthenticated}
                token={token}
              />
            }
          />
          <Route exact path="/read/:id" element={<ReadArticle />} />
          <Route
            exact
            path="/auth/admin"
            element={<Login setToken={setToken} token={token} />}
          />
          <Route
            exact
            path="/article/create"
            element={
              isAuthenticated ? <NewArticle token={token} /> : <NotFound />
            }
          />
          <Route
            exact
            path="/article/edit/:id"
            element={
              isAuthenticated ? <NewArticle token={token} /> : <NotFound />
            }
          />
          <Route
            exact
            path="/category/create"
            element={
              isAuthenticated ? <NewCategory token={token} /> : <NotFound />
            }
          />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
