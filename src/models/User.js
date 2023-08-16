const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    nameUser: {type: String, required: true},
    emailUser: {type: String, required: true},
},{
    versionKey: false
})

module.exports = model("User", userSchema)