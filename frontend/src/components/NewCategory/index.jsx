import { useState } from "react";
import { categoryService } from "../../api/categoryService";

const NewCategory = (props) => {
  const [category, setCategory] = useState(null);
  const createCategory = async (e) => {
    e.preventDefault();
    await categoryService.createCategory(category, props.token);
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
