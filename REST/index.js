//server 8080
const express = require("express");
const app = express();
const port = 8080;

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})

//require method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//require uuid package
const { v4: uuidv4 } = require('uuid');
//uuidv4();// => '1b9d6cd-bbfd-4b3d-9b5d-ab8dfbbd4bed'

//to make data to understand to express
app.use(express.urlencoded({extended:true}));

//to use folder in index.js
const path = require("path");
app.set("view engine", "ejs");//view engine set to ejs
app.set("views", path.join(__dirname, "views"));
app.use(express.static( path.join(__dirname, "public")));



//play like database to store data and do crud operations
let posts = [
    {
        id: uuidv4(),
        username: "Gaurav",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "Tony",
        content: "I am IronMan!"
    },
    {
        id: uuidv4(),//if space before colon it consider is name 
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

    //creating new id too
    let id = uuidv4();

    //to create new post on posts array
    posts.push({username,content,id});
    res.redirect("/posts");
});

//show route - /posts/:id
app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    //now find post of id in posts array
    let post = posts.find((p) => id === p.id);//find in posts array
    res.render("show.ejs", {post});
});

//update route - /posts/:id
app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");

});
//edit route - /posts/:id/edit
app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});//sending post info{}
});


//destroy route - /posts/:id
app.delete(" /posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    
    res.redirect("/posts");
});


