const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    
    timing : [{type:String,required:true}],
   movie : [{type: mongoose.Schema.Types.ObjectId,ref:"movie",required:true}],
    total_seats: [{type:Number,required:true}],
    screens : [{type: mongoose.Schema.Types.ObjectId,ref:"screen",required:true}]
},{
    versionKey:false,
    timestamps:true,
    
})

const Show = mongoose.model("show",showSchema)

module.exports = Show;