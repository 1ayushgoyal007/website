var express = require('express');
var app = express();
var passport  = require('passport')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs"); 
app.use(express.static(__dirname+"/public"));


app.get('/',function(req,res){
    res.render('index');
});


app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), function(req,res){
      console.log("Application running in port: " + app.get("port"));
});