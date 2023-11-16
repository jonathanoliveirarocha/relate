import { useState } from "react";

function Categories() {
  const [menuActive, setMenuActive] = useState(false);
  const changeMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <>
      <div
        className={`w-36 m-1 p-2 flex items-center bg-gray-100 rounded-lg trasition-transform duration-300 transform -translate-x-[138px] sm:translate-x-[0] relative ${
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
            <li>
              <a href="/">
                <div className="shadow-md text-center px-2 rounded-md bg-white">
                  Node.js
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="shadow-md text-center px-2 rounded-md bg-white">
                  Tailwind
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="shadow-md text-center px-2 rounded-md bg-white">
                  MongoDB
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="shadow-md text-center px-2 rounded-md bg-white">
                  SOLID
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="shadow-md text-center px-2 rounded-md bg-white">
                  Jest
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Categories;
