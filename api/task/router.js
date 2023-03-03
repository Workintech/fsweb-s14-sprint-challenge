// `/api/tasks` router buraya
const express = require("express");
const Tasks = require("./model");
const router = express.Router();
const mw = require("./middleware");
router.get("/", async (req, res, next) => {
  try {
    const task = await Tasks.getAll();
    res.json(task);
  } catch (error) {
    next(error);
  }
});
router.post("/", mw.checkPayloadAndProjectIdExist, async (req, res, next) => {
  try {
    let insertedData = await Tasks.insert(req.body);
    res.json(insertedData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
