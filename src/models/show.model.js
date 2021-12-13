const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    
    timing : [{type:String,required:true}],
   movie : [{type: mongoose.Schema.Types.ObjectId,ref:"movies",required:true}],
    total_seats: [{type:String,required:true}],
    screens : [{type: mongoose.Schema.Types.ObjectId,ref:"screen",required:true}]
},{
    versionKey:false,
    timestamps:true,
    
})

const show = mongoose.model("show",showSchema)

module.exports = show;