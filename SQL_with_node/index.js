const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

//to connection
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "sql_node",
    password : "1234",
});


//store 100 user data (fake)
let getRandomUser = ()=>{
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

//Inserting new data
let q = "INSERT INTO user (id,username,email,password) VALUES ?";

//to get 100 user data
let data =[];
for (let i = 1; i <=100 ; i++) {
    data.push(getRandomUser());
}

//to use
try {
    connection.query(q,[data], (err,result)=>{
        if(err) throw err;
        console.log(result);
    })
} catch (err) {
    console.log(err);
}
connection.end();