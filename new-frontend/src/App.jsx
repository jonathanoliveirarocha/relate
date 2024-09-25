import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ReadArticle from "./components/ReadArticle";
import Articles from "./components/Articles";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/articles" element={<Articles />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
          <Route exact path="/article/:id" element={<ReadArticle />} />
          <Route exact path="/admin/auth/login" element={<Login />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
