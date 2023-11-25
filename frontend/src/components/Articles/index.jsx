import { useEffect, useState } from "react";
import ArrowUp from "../../assets/arrow-up.svg";

const Articles = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (props.search === "") {
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
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      let response;
      try {
        if (props.search === "") {
          response = await fetch("http://localhost:5000/article/showall");
        } else {
          response = await fetch(
            `http://localhost:5000/article/search/keyword/${props.search}`
          );
        }
        const obj = await response.json();
        setData(obj);
      } catch (error) {
        console.log("Erro ao buscar dados da API");
      }
    };
    fetchData();
  }, [props.search]);

  return (
    <>
      <div className="w-full flex-1 mx-[18px] sm:mx-2 my-4">
        {props.isAuthenticated ? (
          <>
            <a href="/article/create">
              <button className="border border-green-500 text-green-600 bg-green-50 hover:bg-green-100 rounded-sm px-2 mb-2">
                Criar
              </button>
            </a>
          </>
        ) : null}

        {data.map((article) => (
          <Article
            key={article._id}
            isAuthenticated={props.isAuthenticated}
            context={article}
            token={props.token}
          />
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
        <button className="fixed text-white z-50 bottom-4 right-4 w-7 bg-white">
          <img src={ArrowUp} alt="Seta para subir página" />
          {/* Used Image: https://www.svgrepo.com/svg/521979/arrow-up-square */}
        </button>
      </a>
    </>
  );
};

const Article = ({ context, isAuthenticated, token }) => {
  const removeArticle = async (id) => {
    const url = `http://localhost:5000/article/delete/${id}`;
    const confirm = window.confirm(
      "Tem certeza que deseja excluir esse artigo?"
    );
    if (confirm) {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });
      response.ok ? location.reload() : alert("Erro Interno!");
    }
  };

  return (
    <>
      <div className="w-full h-[7rem] rounded-md px-3 py-2 mb-3 relative shadow-article">
        <h1 className="font-bold text-lg">{context?.title ?? "Carregando"}</h1>
        <span className="text-sm text-gray-600 abbreviated-paragraph">
          <Text content={context?.content ?? "Carregando"} />
        </span>
        <span className="text-sm text-gray-600 absolute bottom-2">
          {new Date(context?.data ?? null).toLocaleString("pt-BR", {
            timezone: "UTC",
          })}
        </span>
        {isAuthenticated ? (
          <>
            <a
              href={`/article/edit/${context?._id ?? null}`}
              className="absolute right-44 bottom-2 text-sm bg-yellow-50 border border-yellow-500 text-yellow-600 px-2 rounded-sm hover:bg-yellow-100"
            >
              <button>Editar</button>
            </a>

            <button
              className="absolute right-24 bottom-2 text-sm bg-red-50 border border-red-500 text-red-600 px-2 rounded-sm hover:bg-red-100"
              onClick={() => {
                removeArticle(`${context?._id ?? null}`);
              }}
            >
              Excluir
            </button>
          </>
        ) : null}
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
      <div dangerouslySetInnerHTML={{ __html: `${content}` }}></div>
    </>
  );
};

export default Articles;
