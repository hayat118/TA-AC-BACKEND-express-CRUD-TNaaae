var express=require('express')
var router=express.Router();

var User=require('../models/user')


// 
router.get('/',(req,res,next)=>{
  res.send('users page')
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




// 
module.exports=router;