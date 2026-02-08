import Environment from "../config/environment";

const ARTICLES_BASE_URL = Environment.BACKEND_URL + "/articles";

const articleService = {
  fetchAllArticles: async () => {
    try {
      const response = await fetch(`${ARTICLES_BASE_URL}/articles`);
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Falha ao buscar artigos!");
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return null;
    }
  },

  fetchArticleById: async (articleId) => {
    try {
      const response = await fetch(
        `${ARTICLES_BASE_URL}/articles/${articleId}`,
      );
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Falha ao buscar artigo!");
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return null;
    }
  },

  createArticle: async (articleData, token) => {
    try {
      const response = await fetch(`${ARTICLES_BASE_URL}/articles`, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        localStorage.removeItem("jwtToken");
        alert("Sua sessão expirou!");
        window.location.href = "/admin/auth/login";
        throw new Error(errorResponse.error || "Falha ao criar artigo!");
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return null;
    }
  },

  updateArticle: async (articleData, articleId, token) => {
    try {
      const response = await fetch(
        `${ARTICLES_BASE_URL}/articles/${articleId}`,
        {
          method: "PUT",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(articleData),
        },
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        localStorage.removeItem("jwtToken");
        alert("Sua sessão expirou!");
        window.location.href = "/admin/auth/login";
        throw new Error(errorResponse.error || "Falha ao atualizar artigo!");
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return null;
    }
  },

  deleteArticle: async (articleId, token) => {
    try {
      const response = await fetch(
        `${ARTICLES_BASE_URL}/articles/${articleId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        },
      );
      if (!response.ok) {
        const errorResponse = await response.json();
        localStorage.removeItem("jwtToken");
        alert("Sua sessão expirou!");
        window.location.href = "/admin/auth/login";
        throw new Error(errorResponse.error || "Falha ao deletar artigo!");
      }
      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  },

  fetchArticlesByCategory: async (category) => {
    try {
      const response = await fetch(
        `${ARTICLES_BASE_URL}/articles/search/category/${category}`,
      );
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(
          errorResponse.error || "Falha ao buscar artigos por categoria!",
        );
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return null;
    }
  },

  fetchArticlesByKeyword: async (keyword) => {
    try {
      const response = await fetch(
        `${ARTICLES_BASE_URL}/articles/search/keyword/${keyword}`,
      );
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(
          errorResponse.error || "Falha ao buscar artigos por palavra-chave!",
        );
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return null;
    }
  },
};

export { articleService };
