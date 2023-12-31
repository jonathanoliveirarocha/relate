const BASE_URL = "https://dev-relate.vercel.app/category";

const categoryService = {
  showAllCategories: async () => {
    try {
      const response = await fetch(`${BASE_URL}/showall`);
      const obj = await response.json();
      return obj;
    } catch (error) {
      console.log("Erro ao buscar dados da API");
    }
  },

  deleteCategoryById: async (id, token) => {
    try {
      const url = `${BASE_URL}/delete/${id}`;
      const response = await fetch(url, {
        headers: {
          Authorization: token,
        },
        method: "DELETE",
      });
      response.ok ? location.reload() : alert("Erro Interno!");
    } catch (error) {
      console.log("Erro ao buscar dados da API");
    }
  },

  createCategory: async (category, token) => {
    try {
      const url = `${BASE_URL}/create`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category }),
      });
      if (response.ok) {
        alert("Categoria criada com sucesso!");
      } else {
        alert("Erro Interno");
      }
    } catch (error) {
      console.log("Erro ao buscar dados da API");
    }
  },
};

export { categoryService };
