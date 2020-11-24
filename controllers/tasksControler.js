let tasks = require("../tasks");

exports.tasksList = (req, res) => res.json(tasks);

exports.createTask = (req, res) => {
  const id = tasks[tasks.length - 1].id + 1;
  const newTask = { id, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const { itemId } = req.params;
  const founditem = tasks.find((item) => item.id === +itemId);
  if (founditem) {
    for (const key in req.body) founditem[key] = req.body[key];
    res.status(204).end();
  } else res.status(404).json({ message: "item not found" });
};

exports.deleteTask = (req, res) => {
  const { itemId } = req.params;
  const founditem = tasks.find((item) => item.id === +itemId);
  if (founditem) {
    tasks = tasks.filter((item) => item.id !== +itemId);
    console.log("REQUEST", req.params);
    res.status(204).end();
  }
  res.status(404).json({ message: "item not found" });
};
