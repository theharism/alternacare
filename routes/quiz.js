const express = require("express");
const { quiz } = require("../controller/quiz");
const router = express.Router();

router.post("/quiz", quiz);

module.exports = router;
