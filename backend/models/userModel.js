const {Schema, model} = require("../connection")

const userSchema = new Schema({
    name:{
        type: String,
        
    },
    email: {
        type: String,
        default: unique
    },
    password:String


});

module.exports = model("user", userSchema)