const mongoose = require("mongoose")


const foodschema = new mongoose.Schema({
    name:String,
    description: String,
    price: Number,
    category: String
})
const Food=mongoose.model("Food",foodschema);
module.exports=Food;