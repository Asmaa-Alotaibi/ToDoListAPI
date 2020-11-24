const express = require("express");
const router = express.Router();
const {
  tasksList,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksControler");

/*  get tasks*/
router.get("/", tasksList);

/* create task*/
router.post("/", createTask);

/* Update item*/
router.put("/:itemId", updateTask);

/* delete task*/
router.delete("/:itemId", deleteTask);

module.exports = router;
