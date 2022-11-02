var express=require('express')
var mongoose=require('mongoose')
var logger=require('morgan')
var path=require('path')

// var User=require('../models/user')



mongoose.connect("mongodb://localhost:27017/userdata",(err)=>{
  console.log( err ? err: "connected true")
})

// initiating
var app=express();




// middleware
app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))


// setup view engine
app.set("view engine","ejs")
app.set("views",path.join(__dirname, "views"));

// routing middleware
// var indexRouter=require('./routes/index')
// var usersRouter=require('./routes/users')



app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'))




// setup static directory
app.use(express.static(path.join(__dirname + "public")))


// error 404
app.use((req,res,next)=>{
  res.send('page not found')
})

// custom error
app.use((err,req,res,next)=>{
  res.send(err)
})

// 
app.listen(3000,()=>{
  console.log('server is listening on port 3k')
})