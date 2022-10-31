var express=require('express')
var router=express.Router();

// 
router.get('/',(req,res)=>{
  res.send('users page')
})
router.get('/new',(req,res)=>{
  res.render('newusers')

})

// router.post('/',(req,res)=>{
//   // console.log(req.body);
//   res.send(req.body);
// })


// 
module.exports=router;