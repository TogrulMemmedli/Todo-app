const express = require("express");
const userController = require("../controllers/user.controller");
const {
  validationMiddleware,
} = require("../middlewares/validation.middleware");
const { userSchema } = require("../schema/auth.schema");

const router = express.Router();

router.get("/", userController.getAllUser);
router.get("/:id", userController.getUserById);
router.post("/", validationMiddleware(userSchema), userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
