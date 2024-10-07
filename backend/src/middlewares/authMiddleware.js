const jwt = require("jsonwebtoken");
const secretKey = process.env.SESSION_KEY || "<SECRET-KEY>";

module.exports = {
  verifyToken: (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(403).json({ error: "Você não tem acesso a este recurso!" });
    }

    const token = authHeader;

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Token inválido!" });
      }
      req.user = decoded;
      next();
    });
  },
};
