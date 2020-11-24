const express = require("express");
const router = express.Router();
const { tasksList } = require("../controllers/tasksControler");

/*  get tasks*/
router.get("/", tasksList);

/* create task*/

/* delete task*/

module.exports = router;
