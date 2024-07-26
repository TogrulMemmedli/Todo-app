const { userService } = require("../services");
const { decodePayload } = require("../utils/jwt.util");

const authMiddleware = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token?.includes("Bearer")) {
    return res.status(401).json({ message: "Token is required" });
  }
  token = token.split(" ")[1];
  const result = decodePayload(token);

  if (!result?.id) {
    return res.status(401).json({ message: "Token is invalid" });
  }
  const user = await userService.getUserById(result.id);
  req.user = user;

  next();
};

module.exports = authMiddleware;
