'use strict';

const express = require("express");

const PORT = 9090
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello, this is server")
})

app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}/`))