const express = require("express");
const app = express();
const port = 8080;

//to parse data for express to understand
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});



//GET
app.get("/register",(req,res)=>{
    let {user,password} = req.query;
    res.send(`Standard get response! Welcome ${user}!`);
});

//POST
app.post("/register",(req,res)=>{
    let {user,password} = req.body;
    res.send(`Standard get response! Welcome ${user}!`);
});