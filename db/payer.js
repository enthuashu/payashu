const mongoose = require("mongoose");

const payerSchema = new mongoose.Schema({
   firstname:{
    type:String,
    required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    amount:{
        type:String,
        required:true
    }
})

const Payer = new mongoose.model("Payer",payerSchema);

module.exports = Payer;