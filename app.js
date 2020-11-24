const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const tasksRoutes = require("./routes/tasks");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/tasks", tasksRoutes);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
