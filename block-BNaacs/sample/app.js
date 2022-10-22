var express=require('express')
var mongoose=require('mongoose')
var logger=require('morgan')
var path=require('path')

mongoose.connect("mongodb://localhost:27017/sample",(err)=>{
  console.log(err?err:"connected true")
})

var app=express();
// middleware

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// setup view engine
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"))


// 
app.get('/',(req,res)=>{
  res.sendFile(__dirname + "./index.html")
})
app.get('/welcome',(req,res)=>{
  res.render('index')
})


// 
app.use((req,res,next)=>{
  res.send('Page not found')
})
// 
app.listen(5000,()=>{
  console.log('We are listening on port 5k')
})