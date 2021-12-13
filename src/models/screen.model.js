const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
    
    name : [{type:String,required:true}],
    theater : [{type: mongoose.Schema.Types.ObjectId,ref:"theater",required:true}],
   
},{
    versionKey:false,
    timestamps:true,
    
})

const screen = mongoose.model("screen",screenSchema)

module.exports = screen;