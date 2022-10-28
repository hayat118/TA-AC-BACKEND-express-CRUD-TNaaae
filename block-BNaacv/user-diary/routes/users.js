var express=require('express')
var router=express.Router();

// 
router.get('/new',(req,res)=>{
  res.send('form data')
})


router.post('/',(req,res)=>{
  res.send(req.body)
})




module.exports=router;