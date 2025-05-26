const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

//to connection
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "sql_node",
    password : "1234",
});

//to use
try {
    connection.query("SHOW TABLES", (err,result)=>{
        if(err) throw err;
        console.log(result);
    })
} catch (err) {
    console.log(err);
}
connection.end();