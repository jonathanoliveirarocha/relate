function NewArticle() {
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
                rows={25}
                type="text"
                name="content"
                className="w-full border border-gray-200 rounded-md px-2 py-1"
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
