import { useState, useEffect } from "react";

const NewArticle = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-4/5 rounded-lg border border-gray-200 p-4">
          <Form />
        </div>
      </div>
    </>
  );
};

const Form = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(0);
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
  const submitForm = async (e) => {
    console.log(JSON.stringify({ title, category, content }));
    e.preventDefault();
    const url = "http://localhost:5000/article/create";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, category, content }),
    });
    if (response.ok) {
      setSubmitted(1);
    } else {
      setSubmitted(2);
    }
  };

  return (
    <>
      {submitted == 1 ? (
        <p className="text-center text-green-500 mb-2">
          Adicionado com Sucesso!
        </p>
      ) : submitted == 2 ? (
        <p className="text-center text-red-500 mb-2">
          Falha ao adicionar Artigo!
        </p>
      ) : null}
      <form onSubmit={submitForm} className="space-y-4">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="title" className="text-sm">
              Título:
            </label>
            <input
              required
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-200 rounded-md px-2 py-1"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="category" className="text-sm">
              Categoria:
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="w-full border border-gray-200 rounded-md px-2 py-1"
            >
              <option value="" defaultChecked>
                Selecione...
              </option>
              {data.map((category) => (
                <option
                  key={category?._id ?? null}
                  value={category?._id ?? null}
                >
                  {category?.name ?? null}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="content" className="text-sm">
            Conteúdo:
          </label>
          <textarea
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
        <button
          type="submit"
          className="w-full py-1 rounded-md bg-gray-500 text-white hover:bg-gray-600"
        >
          Publicar
        </button>
      </form>
    </>
  );
};

export default NewArticle;
