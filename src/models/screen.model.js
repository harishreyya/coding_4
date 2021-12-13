const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
    
    name : [{type:String,required:true}],
    theater : [{type: mongoose.Schema.Types.ObjectId,ref:"theaters",required:true}],
   
},{
    versionKey:false,
    timestamps:true,
    
})

const Screen = mongoose.model("screen",screenSchema)

module.exports = Screen;