import { useEffect, useState } from "react";

const Articles = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/article/showall");
        const obj = await response.json();
        setData(obj);
      } catch (error) {
        console.log("Erro ao buscar dados da API");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full flex-1 mx-[18px] sm:mx-2 my-4">
        {data.map((article) => (
          <Article key={article._id} context={article} />
        ))}
      </div>
      <ScrollUp />
    </>
  );
};

const ScrollUp = () => {
  return (
    <>
      <a href="#">
        <button className="fixed text-white z-50 bottom-4 right-4 w-8 h-8 bg-gray-800 rounded-md">
          ^
        </button>
      </a>
    </>
  );
};

const Article = ({ context }) => {
  return (
    <>
      <div className="w-full h-24 shadow-lg rounded-lg p-1 relative">
        <h1 className="font-bold text-lg">{context?.title ?? "Carregando"}</h1>
        <p className="text-sm text-gray-600 abbreviated-paragraph">
          <Text content={context?.content ?? "Carregando"}/>
          
        </p>
        <a
          href={`/read/${context?._id ?? null}`}
          className="absolute text-sm right-4 bottom-2 hover:opacity-80"
        >
          Leia Mais
        </a>
      </div>
    </>
  );
};


const Text = ({ content }) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: `${content}` }}
      ></div>
    </>
  );
};

export default Articles;
