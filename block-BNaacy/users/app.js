var express=require('express')
var mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/users",(err)=>{
  console.log( err ? err: "connected true")
})

// initiating
var app=express();
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))


// setup view engine
app.use("view engine","ejs")
app.use("views",path.join(__dirname + "views"));

// setup static directory
app.use(express.static(path.join(__dirname + "public")))

// routing middleware

// app.use('/',indexRouter);
app.use('/users',usersRouter)

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