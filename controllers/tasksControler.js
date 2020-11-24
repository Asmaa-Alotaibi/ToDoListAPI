let tasks = require("../tasks");

exports.tasksList = (req, res) => res.json(tasks);

exports.createTask = (req, res) => {
  const id = tasks[tasks.length - 1].id + 1;
  const newTask = { id, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
};
