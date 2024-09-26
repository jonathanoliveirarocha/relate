import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ReadArticle from "./pages/ReadArticle";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import NewArticle from "./pages/NewArticle";

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
          <Route exact path="/admin/article/create" element={<NewArticle />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
