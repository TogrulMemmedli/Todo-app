const { authService } = require("../services/index");

const singIn = async (req, res) => {
  try {
    let result = await authService.login(req.body);
    res.status(200).json(result);
  } catch (error) {
    switch (error?.message) {
      case "username_not_found":
        res.status(404).json({ message: "Username is not found" });
        break;
      case "invalid_password":
        res.status(400).json({ message: "Password is not correct" });
        break;
      default:
        res.status(500).json({ message: error.message });
        break;
    }
  }
};

module.exports = {
  singIn,
};
