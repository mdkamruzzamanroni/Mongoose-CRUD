const express=require('express');
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");

const router=  express.Router();


// This is my first get routing
router.get("/hello-get",HelloController.HelloGet)
router.post("/hello-post",HelloController.HelloPost)


//mongoose

router.post("/InsertStudent",StudentsController.InsertStudent)
router.get("/ReadStudent",StudentsController.ReadStudent)

module.exports=router;




