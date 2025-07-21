const express = require("express");
const app = express();
let port = 3000;

//server
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

//sending request
// app.use((req,res)=>{
//     console.log("request recieved!");

//     //sending response
//     let code = "<h1>MARVEL</h1> <ul><li>Avengers Secret War</li><li>Avengers DoomsDay</li></ul>";
//     res.send(code);
// });

//routing
// app.get("/",(req,res)=>{
//     res.send("you contacted root path");
// });
// app.get("/search",(req,res)=>{
//     res.send("you contacted search path");
// });
// app.get("/help",(req,res)=>{
//     res.send("you contacted help path");
// });



//path parameter
app.get("/",(req,res)=>{
    res.send("you contacted root path");
});
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`welcome to the page of @${username} with id ${id}.`);
});

//query strings
app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("no search query!")
    }
    res.send(`this are thr result for: ${q}`)
});

app.get('/*path',(req,res)=>{
    res.send("path not exist");
});


