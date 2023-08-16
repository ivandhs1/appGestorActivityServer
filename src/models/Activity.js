const { Schema, model } = require('mongoose')

const activitySchema = new Schema({
    nameActivity: {type: String, required: true},
    descActivity: {type: String, required: true},
    stateActivity: {type: Number, required: true},
    userAsignado: {type: String},
    setTime: {type: Date, required: true},
},{
    versionKey: false
})

module.exports = model("Activity", activitySchema)