var express=require('express')
var router=express.Router();

var User=require('../models/user')


// 
router.get('/',(req,res,next)=>{
  // res.send('users page')
  User.find({},(err,users)=>{
    // console.log(err,users);
    if(err) return next(err);
    res.render('users',{users:users})
  })
})
router.post('/',(req,res,next)=>{
  // res.send(req.body);
  User.create(req.body,(err,createdUser)=>{
    if(err) return next(err);
    console.log(createdUser)
    res.redirect("/users/new")
  })
})
router.get('/new',(req,res)=>{
  res.render('newusers')

})

router.get('/:id',(req,res,next)=>{
   var id=req.params.id;
   User.findById(id,(err,user)=>{
    //  console.log(user)
     if(err) return next(err);
     res.render('userdetails',{user:user})
   })
})




// 
module.exports=router;