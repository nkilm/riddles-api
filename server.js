'use strict';

const express = require("express");
const path = require('path');

const PORT = 9090
const app = express();

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.use("/random",require("./routes/routes"))

app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}/`))