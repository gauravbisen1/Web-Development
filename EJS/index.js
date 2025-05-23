const express = require("express");
const app = express();
let port = 8080;
const path = require("path");

app.set("views",path.join(__dirname,"/views"));

//server
app.listen(port,()=>{
    console.log(`listen on port ${port}`);
});

//using ejs
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

//rolldice
app.get("/rolldice", (req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
});

//instagram
app.get("/ig/:username", (req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    
    if (data) {
        res.render("instagram.ejs",{data});
    } else {
        res.render("error.ejs");
    }
});
