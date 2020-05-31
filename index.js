var express = require('express');
var app = express();
var passport  = require('passport')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs"); 
app.use(express.static(__dirname+"/public"));
var User = require('./models/user');



//Auth Implementation--------------------------------------------
var passport = require('passport');
var localStrategy = require("passport-local");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/startup",{ useUnifiedTopology: true,useNewUrlParser:true });


app.use(require("express-session")({
    secret:"Once Again I am Here!!",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());









app.get('/',function(req,res){
    res.render('index');
});

app.get('/about',function(req,res){
    res.render('about');
})

app.get('/sign-up',function(req,res){
    res.render('sign-up');
})

app.post('/sign-up',function(req,res){
    var newUser = new User({ username:req.body.username,name:req.body.name});
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err);
            return res.render('sign-up');
        }else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("/");
            });
        }
    })
})

app.get('/login',function(req,res){
    res.render('login');
});

app.post('/login',passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'back'
}),function(req,res){
    //DO NOTHING
});


app.get('/logout',function(req,res){
    req.logOut();
    res.redirect('/');
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