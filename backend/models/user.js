const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    fName:String,
    lName:String,
    email:String,
    pwd:String,
    role:String,
})
const User=mongoose.model("User",userSchema);
module.exports=User ;