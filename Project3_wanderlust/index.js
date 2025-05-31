const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});

app.get("/",(req,res)=>{
    res.send("Hii, I am root");
});

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main(){
    await mongoose.connect(MONGO_URL);
};

main().then(()=>{
    console.log("connected to database");
}).catch(err=>{
    console.log(err);
});

//testing
// app.get("/testData", async (req,res)=>{
//     let sampleListing = new Listing({
//         title : "Testing Dtabase",
//         description : "data is enter or not in database!",
//         price : 1200,
//         location : "Hp ",
//         country : "india"
//     });
//     await sampleListing.save();
//     console.log("Sample data was saved!");
//     res.send("Successful testing");
// });

//index route
