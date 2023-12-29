const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SESSION_KEY;
const userService = require("../services/user.service");

const authController = {
  submitForm: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userService.findByEmail(email);
      if (!user) {
        return done(null, false, { message: "Esta conta não existe!" });
      } else {
        bcrypt.compare(password, user.password, (err, logged) => {
          if (logged) {
            if (user.admin == 1) {
              const token = jwt.sign({ email }, secretKey, {
                expiresIn: "12h",
              });
              res.json({ token });
            } else {
              res
                .status(401)
                .json({ message: "Você não é um administador do site!" });
            }
          } else {
            res.status(401).json({ message: "Credenciais inválidas!" });
          }
        });
      }
    } catch (err) {
      res.status(500).json({ erro: "Erro interno!" });
    }
  },

  validadeUser: (req, res) => {
    res.status(200).json({ message: "Autenticado com sucesso!" });
  },
};

module.exports = authController;
