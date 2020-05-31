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

app.get('/about',function(req,res){
    res.render('about');
})


app.get('/login',function(req,res){
    res.render('login');
});

app.get('/sign-up',function(req,res){
    res.render('sign-up');
})

app.get('/contact',function(req,res){
    res.render('contact');
})

app.post('/contact',function(req,res){
    var contact = {
           name: req.body.username,
           email: req.body.email,
           phone: req.body.number,
           message:req.body.message
    }
    res.send('you did it.')
})





app.get('*',function(req,res){
    res.render('default');
});

app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), function(req,res){
      console.log("Application running in port: " + app.get("port"));
});