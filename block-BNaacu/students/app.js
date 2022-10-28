var express=require('express')
var mongoose=require('mongoose')
var logger=require('morgan')
var path=require('path')

mongoose.connect("mongodb://localhost:27017/students",(err)=>{
  console.log(err?err:"connected true")
})

var app=express();
// middleware

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routing middleware
app.use('/',require('./routes/index'))
app.use('/students',require('./routes/students'))

// setup view engine
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"))



app.get('/',(req,res)=>{
  res.send('Welcome')
})
app.get('/students',(req,res)=>{
 var students=['hayat','hayat1','hayat2']
 res.render("index",{students:students})
})


// 
app.use((req,res,next)=>{
  res.send('Page not found')
})
// 
app.listen(5000,()=>{
  console.log('We are listening on port 5k')
})