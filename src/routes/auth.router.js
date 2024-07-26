const express = require("express");
const { userSchema } = require("../schema/auth.schema");

// TODO: controller
const { singIn } = require("../controllers/auth.controller");
const {
  validationMiddleware,
} = require("../middlewares/validation.middleware");

const router = express.Router();

router.post("/login", validationMiddleware(userSchema), singIn);

module.exports = router;
