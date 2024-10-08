const User = require("../models/User");

const userService = {
  findByEmail: async (email) => {
    try {
      const user = await User.findOne({ email });
      return user || null; 
    } catch (error) {
      throw new Error("Erro ao buscar o usuário pelo email!"); 
    }
  },
};

module.exports = userService;
