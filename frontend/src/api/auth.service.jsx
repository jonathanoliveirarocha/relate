const BASE_URL = "https://dev-relate.vercel.app/auth";

const authService = {
  loginAdminUser: async (user) => {
    try {
      const url = `${BASE_URL}/admin`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      return response;
    } catch (error) {
      console.log("Erro ao buscar dados da API");
    }
  },

  verifyAuth: async (token) => {
    try {
      if (token) {
        const response = await fetch(
          "https://dev-relate.vercel.app/auth/validate",
          {
            method: "POST",
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.ok) {
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      console.log("Erro ao buscar dados da API");
    }
  },
};

export { authService };
