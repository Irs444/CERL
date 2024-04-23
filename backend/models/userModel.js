const {Schema, model} = require("../connection")

const userSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password:String,
    createAt:{
        type: Date,
        default: Date.now()
    }


});

module.exports = model("user", userSchema)