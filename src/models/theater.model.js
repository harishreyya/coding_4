const mongoose = require("mongoose");

const theaterSchema = new mongoose.Schema({
    
    name : [{type:String,required:true}],
    location : [{type:String,required:true}],
   
},{
    versionKey:false,
    timestamps:true,
    
})

const theater = mongoose.model("theater",theaterSchema)

module.exports = theater;