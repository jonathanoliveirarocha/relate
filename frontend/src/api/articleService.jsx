const BASE_URL = "https://dev-relate.vercel.app/article";

const articleService = {
  showAllArticles: async () => {
    try {
      const response = await fetch(`${BASE_URL}/showall`);
      const obj = await response.json();
      return obj;
    } catch (error) {
      console.log("Erro ao buscar dados da API");
    }
  },

  showArticlesByKeyword: async (keyword) => {
    try {
      const response = await fetch(`${BASE_URL}/search/keyword/${keyword}`);
      const obj = await response.json();
      return obj;
    } catch (error) {
      console.log("Erro ao buscar dados da API");
    }
  },

  deleteArticleById: async (id, token) => {
    try {
      const url = `${BASE_URL}/delete/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });
      response.ok ? location.reload() : alert("Erro Interno!");
    } catch (error) {
      console.log("Erro ao buscar dados da API");
    }
  },

  showOneArticleById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/showone/${id}`);
      const obj = await response.json();
      return obj;
    } catch (error) {
      console.log("Erro ao buscar dados da API");
    }
  },

  createArticle: async (article, token) => {
    const url = `${BASE_URL}/create`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
    if (response.ok) {
      alert("Adicionado com sucesso!");
    } else {
      alert("Erro Interno");
    }
  },

  updateArticleById: async (article, id, token) => {
    const url = `${BASE_URL}/update/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
    if (response.ok) {
      alert("Atualizado com sucesso!");
    } else {
      alert("Erro Interno");
    }
  },
};

export { articleService };
