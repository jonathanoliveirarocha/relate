import React, { useState } from "react";

function NewArticle() {
  const [textHTML, setTextHTML] = useState("Preview...");

  const setNewText = (event) => {
    setTextHTML(event.target.value);
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-4/5 rounded-lg border border-gray-200 p-4">
          <form className="space-y-4">
            <div>
              <label htmlFor="title" className="text-sm">
                Título:
              </label>
              <input
                type="text"
                name="title"
                className="w-full border border-gray-200 rounded-md px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="content" className="text-sm">
                Conteúdo:
              </label>
              <textarea
                onChange={setNewText}
                placeholder="Digite o HTML aqui..."
                rows={12}
                type="text"
                name="content"
                className="w-full border border-gray-200 rounded-md px-2 py-1"
              />
            </div>
            <div className="h-64 overflow-auto px-2 flex justify-center">
              <div
                className="max-w-[1000px]"
                dangerouslySetInnerHTML={{ __html: textHTML }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-1 rounded-md bg-gray-500 text-white hover:bg-gray-600"
            >
              Publicar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewArticle;
