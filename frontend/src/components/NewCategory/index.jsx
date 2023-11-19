const NewCategory = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <form>
          <div className="rounded-lg border border-gray-200 p-6 space-y-4">
            <div className="space-y-3">
              <input
                className="border border-gray-200 rounded-md px-2 py-1"
                type="text"
                name="category"
                placeholder="Nova categoria"
                required
              />
            </div>
            <button
              className="w-full py-1 rounded-md bg-gray-500 text-white hover:bg-gray-600"
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
