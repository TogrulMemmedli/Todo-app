const { checkPassword } = require("../utils/bcrypt.util");
const { encodePayload } = require("../utils/jwt.util");
const { getUserByUsername } = require("./user.service");

const login = async (params) => {
  const { username, password } = params || {};
  let user = await getUserByUsername(username);
  if (!user) throw new Error("username_not_found");

  user = user.toJSON();

  const checkPass = await checkPassword(password, user.password);
  if (!checkPass) throw new Error("username_not_found");

  const token = encodePayload({
    id: user.id,
  });

  delete user.password;

  return {
    user,
    token,
  };
};

module.exports = { login };
