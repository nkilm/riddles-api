'use strict';

const express = require("express");
const router = express.Router();
const data = require("../data/riddles.json")


router.get("/", (req, res) => {
    let riddleObj = data[Math.floor(Math.random() * data.length)];
    res.send(riddleObj);
})
module.exports = router;