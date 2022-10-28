var express=require('express')
var mongoose=require('mongoose')
var logger=require('morgan')
var path=require('path')

mongoose.connect("mongodb://localhost:27017/user-diady",(err)=>{
  console.log(err?err:"connected true")
})

var app=express();

// 

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// 
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))

// 
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"))

// 



app.get('/users',(req,res)=>{
 var users=['hayat','arya','sam']
 res.render("index",{users:users})
})

// 
app.use((req,res,next)=>{
  res.send('page not found')
})

// 
app.listen(3000,()=>{
  console.log('We are listening on port 3k')
})