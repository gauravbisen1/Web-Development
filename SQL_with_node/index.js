const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");


app.use(methodOverride("_method"));

//parse data
app.use(express.urlencoded({extended:true}));

//start server
app.listen("8080", ()=>{
    console.log("server is listening to port 8080");
} );

//ejs
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

//to connection of db
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "sql_node",
    password : "1234",
});

//routr home
app.get("/",(req,res)=>{
    let q = `SELECT count(*) FROM user`;
    //to run query on db inside this route
    try {
        connection.query(q,(err,result)=>{
            if(err) throw err;
            //console.log(result[0]["count(*)"]);
            let count = result[0]["count(*)"];
            res.render("home.ejs",{ count });
        })
    } catch (err) {
            console.log(err);
            res.send("Some error in DB`");
    }
    
});

//show user route
app.get("/user",(req,res)=>{
    let q = (`SELECT * FROM user`);
    try {
        connection.query(q,(err,users)=>{
            if(err) throw err;
            res.render("showuser.ejs",{ users });
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB`");
    }
})

//edit route
app.get("/user/:id/edit",(req,res)=>{
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id ='${id}'`;
    try {
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs",{ user });
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB`");
    }
});

//update route



















//-------------------------------------------------------------------------------------------------------------
//store 100 user data (fake)
// let getRandomUser = ()=>{
//     return [
//         faker.string.uuid(),
//         faker.internet.username(),
//         faker.internet.email(),
//         faker.internet.password(),
//     ];
// };

//Inserting new data
let q = "INSERT INTO user (id,username,email,password) VALUES ?";

//to get 100 user data
// let data =[];
// for (let i = 1; i <=100 ; i++) {
//     data.push(getRandomUser());
// }

//to use
// try {
//     connection.query(q,[data], (err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }
// connection.end();