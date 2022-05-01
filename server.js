'use strict';

const express = require("express");

const PORT = 9090
const app = express();

app.get("/",(req,res)=>{
    res.send("Riddles API");
})

app.use("/random",require("./routes/routes"))

app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}/`))