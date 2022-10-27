var express=require('express')
var router=express.Router();

router.get('/',(req,res)=>{
  res.send('Welcome')
})

router.get('/about',(req,res)=>{
  res.render('About Page')
})