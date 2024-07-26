const express = require("express");
const taskController = require("../controllers/task.controller");

const router = express.Router();

router.get("/", taskController.getUserTasks);
router.get("/:id", taskController.getUserTask);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;

