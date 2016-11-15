var express=require("express");
var app=express();
var todoController=require("./controllers/todoController");//require the controller
var port= preocess.env.PORT || 3000;

//setting up the basic
app.set("view engine", "ejs");//set up template engine
app.use(express.static("./public"));//static files
todoController(app);//fire controllers

app.listen(port);//listen to a port
console.log("Listening to port 3000");
