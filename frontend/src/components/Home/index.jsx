import Categories from "../Categories";
import Articles from "../Articles";

const Home = (props) => {
  return (
    <>
      <div className="flex min-h-screen">
        <Categories search={props.search} isAuthenticated={props.isAuthenticated} setSearch={props.setSearch} />
        <Articles search={props.search} isAuthenticated={props.isAuthenticated} setSearch={props.setSearch} />
      </div>
    </>
  );
};

export default Home;
