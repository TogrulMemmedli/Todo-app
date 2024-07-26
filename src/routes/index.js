const express = require("express");

const userRouter = require("./user.router");
const authRouter = require("./auth.router");
const taskRouter = require("./task.router");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/tasks", authMiddleware, taskRouter);

module.exports = router;
