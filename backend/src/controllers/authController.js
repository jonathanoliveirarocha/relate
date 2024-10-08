const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SESSION_KEY;
const userService = require("../services/userService");

const authController = {
  submitAdminLoginForm: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await userService.findByEmail(email);
      if (!user) {
        return res.status(404).json({ error: "Conta não encontrada!" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Credenciais inválidas!" });
      }

      if (!user.isAdmin) {
        return res
          .status(403)
          .json({ error: "Acesso negado: Não é administrador!" });
      }

      const token = jwt.sign({ email: user.email, id: user._id }, secretKey, {
        expiresIn: "12h",
      });

      return res.json({ token });
    } catch (err) {
      return res.status(500).json({ error: "Erro interno do servidor!" });
    }
  },

  validateAuthenticatedUser: (req, res) => {
    return res.status(200).json({ message: "Autenticado com sucesso!" });
  },
};

module.exports = authController;
