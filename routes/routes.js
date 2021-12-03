const express = require("express");
const router = express.Router();
const path = require("path");
const controller = require('../controller.js')

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});

router.get("/userData", controller.userData);
router.post("/new-student", controller.newStudent)

module.exports = router;
 