import { useState } from "react";

const Categories = () => {
  const [menuActive, setMenuActive] = useState(false);
  const changeMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <>
      <div
        className={`w-36 h-fit m-1 p-2 flex items-center bg-gray-100 rounded-lg z-50 trasition-transform duration-300 transform -translate-x-[138px] absolute sm:relative sm:translate-x-[0] ${
          menuActive ? "translate-x-[0]" : "-translate-x-[138px]"
        }`}
      >
        <div
          className="absolute w-6 h-6 text-center rounded-full bg-gray-300 -right-3 cursor-pointer block sm:hidden"
          onClick={changeMenu}
        >
          {menuActive ? "<" : ">"}
        </div>
        <div>
          <h2 className="m-4 font-bold text-lg">Categorias</h2>
          <ul className="space-y-2">
            <Category />
          </ul>
        </div>
      </div>
    </>
  );
};

const Category = () => {
  return (
    <>
      <li>
        <a href="/">
          <button className="shadow-md w-full text-center px-2 rounded-md bg-white">
            Node.js
          </button>
        </a>
      </li>
      <li>
        <a href="/">
          <button className="shadow-md w-full text-center px-2 rounded-md bg-white">
            Tailwind
          </button>
        </a>
      </li>
      <li>
        <a href="/">
          <button className="shadow-md w-full text-center px-2 rounded-md bg-white">
            MongoDB
          </button>
        </a>
      </li>
      <li>
        <a href="/">
          <button className="shadow-md w-full text-center px-2 rounded-md bg-white">
            SOLID
          </button>
        </a>
      </li>
      <li>
        <a href="/">
          <button className="shadow-md w-full text-center px-2 rounded-md bg-white">
            Jest
          </button>
        </a>
      </li>
    </>
  );
};

export default Categories;
