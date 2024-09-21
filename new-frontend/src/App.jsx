import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
