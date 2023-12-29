const User = require("../models/User");

const userService = {
  findByEmail: async (email) => {
    const user = await User.findOne({ email });
    if (user) {
      return user;
    } else {
      return null;
    }
  },
};

module.exports = userService;