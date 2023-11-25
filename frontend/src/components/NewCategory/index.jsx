import { useState } from "react";

const NewCategory = () => {
  const [category, setCategory] = useState(null);
  const createCategory = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/category/create";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category }),
    });
    if (response.ok) {
      alert("Categoria criada com sucesso!");
    } else {
      alert("Erro Interno");
    }
  };
  
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <form onSubmit={createCategory}>
          <div className="rounded-lg border border-gray-200 p-6 space-y-4">
            <div className="space-y-3">
              <input
                className="border border-gray-200 rounded-md px-2 py-1"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                type="text"
                name="category"
                placeholder="Nova categoria"
                required
              />
            </div>
            <button
              className="w-full py-1 rounded-md border border-gray-500 bg-gray-50 text-bg-gray-600 hover:bg-gray-100"
              type="submit"
            >
              Criar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewCategory;
