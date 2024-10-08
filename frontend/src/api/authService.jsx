const AUTH_BASE_URL = "https://relate-backend.vercel.app/auth";

const authService = {
  loginAsAdmin: async (adminCredentials) => {
    try {
      const loginUrl = `${AUTH_BASE_URL}/auth/admin/login`;
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminCredentials),
      });
      return response;
    } catch (error) {
      console.error("Error while communicating with the API for admin login:", error);
    }
  },

  validateAuthToken: async (token) => {
    try {
      if (token) {
        const validationUrl = `${AUTH_BASE_URL}/auth/validate`;
        const response = await fetch(validationUrl, {
          method: "POST",
          headers: {
            Authorization: token,
          },
        });
        return response.ok;
      }
      return false;
    } catch (error) {
      console.error("Error while validating auth token with the API:", error);
    }
  },
};

export { authService };
