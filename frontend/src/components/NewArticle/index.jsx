import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { articleService } from "../../api/articleService";
import { categoryService } from "../../api/categoryService";

const NewArticle = (props) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  if (id) {
    useEffect(() => {
      const fetchData = async () => {
        setData(await articleService.showOneArticleById(id));
      };

      fetchData();
    }, []);
  }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-4/5 rounded-lg border border-gray-200 p-4">
          <Form token={props.token} context={id ? data : null} />
        </div>
      </div>
    </>
  );
};

const Form = ({ context, token }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState(context ? context.title : "");
  const [category, setCategory] = useState(context ? context.category : "");
  const [content, setContent] = useState(context ? context.content : "");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(await categoryService.showAllCategories());
      } catch (error) {
        console.log("Erro ao buscar dados da API");
      }
    };
    fetchData();
  }, []);

  const loadData = () => {
    if (context) {
      document.querySelector("#title").value = context.title;
      document.querySelector("#content").value = context.content;
      document.querySelector("#category").value = context.category;
      setContent(context.content);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (context) {
      updateArticle();
    } else {
      createArticle();
    }
  };

  const createArticle = async () => {
    await articleService.createArticle({ title, category, content }, token);
  };

  const updateArticle = async () => {
    await articleService.updateArticleById(
      { title, category, content },
      context._id,
      token
    );
  };

  const SelectCategory = () => {
    return (
      <>
        <div className="w-1/2">
          <label htmlFor="category" className="text-sm">
            Categoria:
          </label>
          <select
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            className="w-full border border-gray-200 rounded-md px-2 py-1"
          >
            <option value="">Selecione...</option>
            {data.map((category) => (
              <option key={category?._id ?? null} value={category?._id ?? null}>
                {category?.name ?? null}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  };

  return (
    <>
      <form onSubmit={submitForm} className="space-y-4">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="title" className="text-sm">
              Título:
            </label>
            <input
              id="title"
              required
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-200 rounded-md px-2 py-1"
            />
          </div>
          <SelectCategory />
        </div>
        <div>
          <label htmlFor="content" className="text-sm">
            Conteúdo:
          </label>
          <textarea
            id="content"
            required
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Digite o HTML aqui..."
            rows={12}
            type="text"
            name="content"
            className="w-full border border-gray-200 rounded-md px-2 py-1"
          />
        </div>
        <div className="h-64 overflow-auto px-2 flex justify-center">
          <div
            className="max-w-[1000px] w-full"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        {context ? (
          <>
            <input
              type="button"
              className="w-full py-1 bg-green-50 border border-green-500 text-green-600 px-2 rounded-md hover:bg-green-100 cursor-pointer"
              onClick={loadData}
              value="Carregar Dados"
            />
            <button
              type="submit"
              className="w-full py-1 bg-gray-50 border border-gray-500 text-gray-600 px-2 rounded-md hover:bg-gray-100"
            >
              Atualizar
            </button>
          </>
        ) : (
          <button
            type="submit"
            className="w-full py-1 bg-gray-50 border border-gray-500 text-gray-600 px-2 rounded-md hover:bg-gray-100"
          >
            Publicar
          </button>
        )}
      </form>
    </>
  );
};

export default NewArticle;
