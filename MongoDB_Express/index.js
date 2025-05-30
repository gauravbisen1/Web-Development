const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
    .then(()=>{
        console.log("Connection successful!");
    })
    .catch((err)=>console.log(err));



//route
app.get("/",(req,res)=>{
    res.send("root is working!");
});

//index route
app.get("/chats", async (req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs",{ chats });
});

//new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

//create route
app.post("/chats",(req,res)=>{
    let{from,to,msg} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at: new Date()
    });
    newChat.save()
        .then((res=>{console.log("chats was saved")}))
        .catch(err=>{console.log(err);});

    res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit",async (req,res)=>{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{ chat });
});

