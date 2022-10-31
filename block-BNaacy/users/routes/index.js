var express =require('express')
var router=express.Router();

router.get('/',(req,res)=>{
  res.send('Welcome home')
})

module.exports=router;