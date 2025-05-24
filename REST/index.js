//server 8080
const express = require("express");
const app = express();
const port = 8080;

//to make data to understand to express
app.use(express.urlencoded({extended:true}));

//to use folder in index.js
const path = require("path");
app.set("view engine", "ejs");//view engine set to ejs
app.set("views", path.join(__dirname, "views"));
app.use(express.static( path.join(__dirname, "public")));

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})

//play like database to store data and do crud operations
let posts = [
    {
        id : "1a",
        username: "Gaurav",
        content: "I love coding!"
    },
    {
        id : "2b",
        username: "Tony",
        content: "I am IronMan!"
    },
    {
        id : "3c",
        username: "Thor",
        content: "God of thunder!"
    }
];

//index route - /posts
app.get("/posts", (req,res) => {
    res.render("index.ejs", {posts});//send index.ejs file to /posts route
});

//create route - 1)/posts/new    2)/posts
app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
})

app.post("/posts", (req,res)=>{
    let {username,content} = req.body;//destructuring
    //to create new post on posts array
    posts.push({username,content});
    res.redirect("/posts");
});

//show route - /posts/:id
app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    //now find post of id in posts array
    let post = post.find((p)=> id===p.id);
    res.render("show.ejs", {post});
});