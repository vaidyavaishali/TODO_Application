const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
     activity:{type:String, required:true},
     Status:{type:String, default:"pending", required:true},
     user:{type:String, ref:"user"}
})
const todomodel = mongoose.model("todo", TodoSchema)

module.exports = todomodel