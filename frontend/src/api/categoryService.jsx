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
};

export { categoryService };
