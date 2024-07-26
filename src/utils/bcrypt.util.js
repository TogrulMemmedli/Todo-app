const bcrypt = require("bcrypt");

const hashPassword = (pass) => {
  return bcrypt.hash(pass, 10);
};

const checkPassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

module.exports = {
  hashPassword,
  checkPassword,
};
