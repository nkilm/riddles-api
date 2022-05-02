'use strict';

const express = require("express");
const path = require("path");
const cors = require("cors")

const PORT = 9090
const app = express();

app.use(express.static(path.join(__dirname,"public")));

app.use(cors({
    origin:"*",
    methods:['GET']
}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.use("/random",require("./routes/routes"))

app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}/`))