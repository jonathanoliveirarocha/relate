import { useState } from "react";

const Header = (props) => {
  const [keyword, setKeyword] = useState("");
  const search = (e) => {
    e.preventDefault();
    props.setSearch(keyword)
  };
  return (
    <>
      <header className="abosolute top-0 w-full h-14 bg-gray-800 min-w-[385px] shadow-md">
        <div className="w-full flex items-center relative h-full">
          <a href="/">
            <h1 className="text-white font-bold text-lg ml-4">Dev Relate</h1>
          </a>
          <div className="absolute right-[5%]">
            <form onSubmit={search} className="space-x-1">
              <input
                type="text"
                className="rounded-[4px] px-2 bg-gray-800 border border-gray-500 text-white"
                placeholder="Pesquisar"
                name="search"
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
              <button
                className="bg-gray-200 hover:bg-gray-300 px-1 rounded-[4px]"
                type="submit"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
