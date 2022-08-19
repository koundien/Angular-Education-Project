const mongoose =require("mongoose");
const courSchema=mongoose.Schema({
    cName:String,
    cPrice:Number,
    cDesc:String,
    cNbre:Number,
    teacherId:String,
})

const Cour=mongoose.model("Cour",courSchema)
module.exports=Cour;