var express=require('express')
var router=express.Router();

// 
router.get('/',(req,res)=>{
  res.render('newUsers')
})

router.post('/',(req,res)=>{
  console.log(req.body);
})