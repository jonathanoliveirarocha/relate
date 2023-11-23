import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NewArticle = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  if (id) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:5000/article/showone/${id}`
          );
          const obj = await response.json();
          setData(obj);
        } catch (error) {
          console.log("Erro ao buscar dados da API");
        }
      };

      fetchData();
    }, []);
  }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-4/5 rounded-lg border border-gray-200 p-4">
          <Form context={id ? data : null} />
        </div>
      </div>
    </>
  );
};

const Form = ({ context }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState(context ? context.title : "");
  const [category, setCategory] = useState(context ? context.category : "");
  const [content, setContent] = useState(context ? context.content : "");
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

  const loadData = () => {
    if (context) {
      document.querySelector("#title").value = context.title;
      document.querySelector("#content").value = context.content;
      document.querySelector("#category").value = context.category;
      setContent(context.content);
    }
  };

  const createArticle = async () => {
    const url = "http://localhost:5000/article/create";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, category, content }),
    });
    if (response.ok) {
      alert("Adicionado com sucesso!");
    } else {
      alert("Erro Interno");
    }
  };

  const updateArticle = async () => {
    const url = `http://localhost:5000/article/update/${context._id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, category, content }),
    });
    if (response.ok) {
      alert("Atualizado com sucesso!");
    } else {
      alert("Erro Interno");
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
              className="w-full py-1 rounded-md bg-green-600 text-white hover:bg-green-700 cursor-pointer"
              onClick={loadData}
              value="Carregar Dados"
            />
            <button
              type="submit"
              className="w-full py-1 rounded-md bg-gray-500 text-white hover:bg-gray-600"
            >
              Atualizar
            </button>
          </>
        ) : (
          <button
            type="submit"
            className="w-full py-1 rounded-md bg-gray-500 text-white hover:bg-gray-600"
          >
            Publicar
          </button>
        )}
      </form>
    </>
  );
};

export default NewArticle;
