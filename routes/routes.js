const express = require("express");
const router = express.Router();

const data = require("../data/riddles.json")

router.get("/", (req, res) => {
    res.send(data[Math.floor(Math.random()*data.length)])
})
module.exports = router;