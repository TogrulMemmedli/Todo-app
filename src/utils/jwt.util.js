const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const encodePayload = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

const decodePayload = (token) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch {
    return false;
  }
};

module.exports = {
  encodePayload,
  decodePayload,
};
