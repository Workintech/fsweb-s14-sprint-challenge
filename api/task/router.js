const express = require("express");
const Task = require("./model")

const router = express.Router();

const md = require("./middleware");

router.get("/task:id", md.checkTaskId,(req,res,next) => {
    try{
        Resource.getTaskId(req.params.id)
        .then( tasks  => {
            res.json(tasks)
        })
    }catch(err){
        next(err)
    }
})

router.post("/task",md.checkPayload,async (req,res,next) => {
    try{

    }catch(err){
        next(err)
    }
})

module.exports = router;