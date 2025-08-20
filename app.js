require('dotenv').config();

var express = require('express');
 var mysql = require('mysql2');
 var bodyparser = require("body-parser");

 var app = express();

  app.set("view engine", "ejs");
  app.use(bodyparser.urlencoded({extended: true}));
  app.use(express.static(__dirname + "/public"));


 var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


 app.get("/", function(req, res){
 var q = 'SELECT COUNT(*) as count FROM users';
 connection.query(q, function (error, results) {
 if (error) throw error;
 var count = results[0].count;
 res.render("home", {data: count});
 //var msg = " hello client! we have" + results[0].count + " users";
// res.send(msg);
 });
});

app.post('/register', function(req,res){
 var person = {email: req.body.email};
 connection.query('INSERT INTO users SET ?', person, function(error, result) {
 console.log(error);
 console.log(result);
 res.redirect("/");
 });
});



 app.listen(3000, function(){
    console.log("server running on 3000!");
         });