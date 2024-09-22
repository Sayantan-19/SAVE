require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const session = require("express-session");
const { on } = require("events");
const { error } = require("console");
const path = require('path'); 
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 4000;

//database conection

mongoose.connect(process.env.DB_uri, { useNewUrlParser: true });
const DB= mongoose.connection;
DB.on('error' , (error) =>{
    console.error(error);
})

DB.once("open", ()=>console.log("connect to data base "))


// set templade engine
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.render("index")
})

app.get('/sign-up', (req, res) => {
    res.render('Sign-up');
});

app.get('/product', (req, res) => {
    // Hardcoded data
    const data = { name: "axios done" };

    // Render the product page and pass the data
    res.render('product', { data });
});








app.listen(PORT , () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

"npm start"
