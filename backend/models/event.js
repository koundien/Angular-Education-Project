const mongoose=require('mongoose');
eventSchema=mongoose.Schema({
    eName:String,
    price:Number,
    desc:String,
    date:Date,
})

Event=mongoose.model("Event",eventSchema);
module.exports=Event;