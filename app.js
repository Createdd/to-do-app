var express=require("express");
var app=express();
var todoController=require("./controllers/todoController");//require the controller

//setting up the basic
app.set("view engine", "ejs");//set up template engine
app.use(express.static("./public"));//static files
todoController(app);//fire controllers

app.listen(3000);//listen to a port
console.log("Listening to port 3000");
