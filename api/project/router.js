//  `/api/projects` router buraya
const express = require("express");
const Projects = require("./model");
const router = express.Router();

//mw

router.get("/", async (req, res, next) => {
  try {
    const project = await Projects.getAll();
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    if (!req.body.project_name) {
      res.status(400).json({ message: "eksik alan var" });
    } else {
      const newProject = await Projects.insert(req.body);
      res.status(200).json(newProject);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
