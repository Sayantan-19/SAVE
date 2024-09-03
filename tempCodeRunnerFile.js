require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const session = require("express-session");


const app = express();

const PORT = process.env.PORT || 4000;


app.get("/", function(req, res){
    res.send("hello world")
})

app.listen(PORT , () => {
    console.log(`Server started at http://localhost:${PORT}`);
});