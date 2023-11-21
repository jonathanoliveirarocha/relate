import Categories from "../Categories";
import Articles from "../Articles";

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <Categories />
        <Articles />
      </div>
    </>
  );
};

export default Home;
