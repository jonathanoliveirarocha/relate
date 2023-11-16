import Header from "./components/Header";
import Categories from "./components/Categories";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Categories />
        <Articles/>
      </div>
    </>
  );
}

export default App;
