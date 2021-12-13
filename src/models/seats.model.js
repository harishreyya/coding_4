const mongoose = require("mongoose");

const seatsSchema = new mongoose.Schema({
   
    shows : [{type: mongoose.Schema.Types.ObjectId,ref:"show",required:true}]
},{
    versionKey:false,
    timestamps:true,
    
})

const Seat = mongoose.model("seats",seatsSchema)

module.exports = Seat;