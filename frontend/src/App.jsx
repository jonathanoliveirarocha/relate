import Header from "./components/Header";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Categories />
      </div>
    </>
  );
}

export default App;
