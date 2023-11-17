import Header from "./components/Header";
import Categories from "./components/Categories";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import NewArticle from "./components/NewArticle";
import Login from "./components/Login";
import ReadArticle from "./components/ReadArticle";

function App() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <ReadArticle />
        {/* <Categories />
        <Articles /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
