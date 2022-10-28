var express=require('express')
var router=express.Router();

router.get('/new',(req,res)=>{
  res.render('form data')
})

router.post('/',(req,res)=>{
res.send(req.body)
  })
  
// router.get('/',(req,res)=>{
//    res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
  
// })

// router.get('/:id',(req,res)=>{
//     var id=req.params.id;
//     students.findById(id,(err,students)=>{
//     console.log(err);
//     res.send(students)
//   })
// })


module.exports=router;