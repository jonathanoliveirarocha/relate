const categoryService = {
  showAllCategories: async () => {
    try {
      const response = await fetch(
        "https://dev-relate.vercel.app/category/showall"
      );
      const obj = await response.json();
      return obj;
    } catch (error) {
      console.log("Erro ao buscar dados da API");
    }
  },

  deleteCategoryById: async (id, token) => {
    try {
      const url = `https://dev-relate.vercel.app/category/delete/${id}`;
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
};

export { categoryService };
