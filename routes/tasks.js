const express = require("express");
const router = express.Router();
const { tasksList, createTask } = require("../controllers/tasksControler");

/*  get tasks*/
router.get("/", tasksList);

/* create task*/
router.post("/", createTask);
/* delete task*/

module.exports = router;
