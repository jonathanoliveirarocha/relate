const jwt = require("jsonwebtoken");
const secretKey = process.env.SESSION_KEY || "<SECRET-KEY>";

module.exports = {
  verifyToken: (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(403).json({ message: "Token não fornecido!" });
    }

    const token = authHeader;

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token inválido!" });
      }
      req.user = decoded;
      next();
    });
  },
};
