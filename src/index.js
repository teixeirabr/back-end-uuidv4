const express = require("express");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());

const projects = [];

app.get("/projects", (req, res) => {
  //   const { title, owner } = req.query;

  //   console.log(title);
  //   console.log(owner);

  res.json(projects);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  res.json(project);
});

app.put("/projects/:id", (req, res) => {
  //   const params = req.params;

  const { id } = req.params;
  console.log(id);

  res.json(["Project 4", "Project 2", "Project 3"]);
});

app.delete("/projects/:id", (req, res) => {
  res.json(["Project 2", "Project 3"]);
});

let port = 3333;

app.listen(port, () => console.log(`listening on port ${port} ✔✔✔ `));
