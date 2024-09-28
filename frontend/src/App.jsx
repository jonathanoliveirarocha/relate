import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ReadArticle from "./pages/ReadArticle";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import NewArticle from "./pages/NewArticle";
import PrivateRoute from "./utils/PrivateRoute";
import {isAuthenticated} from "./utils/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}><Home /></motion.div>} />
        <Route exact path="/articles" element={<Articles />} />
        <Route exact path="/aboutme" element={<AboutMe />} />
        <Route exact path="/article/:id" element={<ReadArticle />} />
        <Route exact path="/admin/auth/login" element={!isAuthenticated() ? <Login /> : <Navigate to="/articles" />} />
        <Route exact path="/admin/article/create" element={ <PrivateRoute element={<NewArticle />} isAuthenticated={isAuthenticated()} /> } />
        <Route exact path="/admin/article/edit/:id" element={ <PrivateRoute element={<NewArticle />} isAuthenticated={isAuthenticated()} /> } />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
