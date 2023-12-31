import { useEffect, useState } from "react";
import ArrowUp from "../../assets/arrow-up.svg";
import { articleService } from "../../api/articleService";

const Articles = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (props.search === "") {
      const fetchData = async () => {
        setData(await articleService.showAllArticles());
      };
      fetchData();
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      let response;
      if (props.search === "") {
        response = await articleService.showAllArticles();
      } else {
        response = await articleService.showArticlesByKeyword(props.search);
      }
      setData(response);
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
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="fixed text-white z-50 bottom-4 right-4 w-7 bg-white">
          <img
            src={ArrowUp}
            alt="Seta para subir página"
            onClick={scrollToTop}
          />
          {/* Used Image: https://www.svgrepo.com/svg/521979/arrow-up-square */}
        </button>
      )}
    </>
  );
};

const Article = ({ context, isAuthenticated, token }) => {
  const removeArticle = async (id) => {
    const confirm = window.confirm(
      "Tem certeza que deseja excluir esse artigo?"
    );
    if (confirm) {
      await articleService.deleteArticleById(id, token);
    }
  };

  return (
    <>
      <div className="w-full h-[7rem] rounded-md px-3 py-2 mb-3 relative shadow-article">
        <h1 className="font-bold text-lg abbreviated-title">
          {context?.title ?? "Carregando"}
        </h1>
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
