var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema= new Schema({
  name:{type:String, required:true},
  email:{type:String, required:/@/},
  age:{type:Number},
  bio:{type:String},
  address:{type:String},
  hobbies:{type:String},
},{timestams:true})

var User= mongoose.model('User',userSchema);

module.exports= User;