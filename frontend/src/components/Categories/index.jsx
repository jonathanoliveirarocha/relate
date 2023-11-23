import { useEffect, useState } from "react";

const Categories = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/category/showall");
        const obj = await response.json();
        setData(obj);
      } catch (error) {
        console.log("Erro ao buscar dados da API");
      }
    };

    fetchData();
  }, []);

  const changeMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <>
      <div
        className={`categories w-36 h-[250px] p-2 overflow-auto overflow-x-hidden m-1 justify-center flex bg-gray-100 rounded-lg z-50 trasition-transform duration-300 transform -translate-x-[138px] absolute sm:relative sm:translate-x-[0] ${
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
          <h2 className="mx-4 mb-1 font-bold text-lg">Categorias</h2>
          <ul className="space-y-2">
            {data.map((category) => (
              <Category key={category._id} context={category} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const Category = ({ context }) => {
  const removeCategory = async (id) => {
    const url = `http://localhost:5000/category/delete/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    response.ok ? location.reload() : alert(error);
  };
  return (
    <>
      <li>
        <a href="">
          <button className="shadow-md w-full text-center px-2 relative rounded-md bg-white">
            <button
              onClick={() => {
                removeCategory(`${context?._id ?? null}`);
              }}
              className="absolute w-2 h-2 bg-red-500 hover:bg-red-600 rounded-full top-[2px] right-[1px]"
            ></button>
            {context?.name ?? "Carregando"}
          </button>
        </a>
      </li>
    </>
  );
};

export default Categories;
