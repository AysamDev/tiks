const mongoose = require('mongoose')
const Schema = mongoose.Schema

const routineSchema = new Schema({
    title: String,
    location: String,
    startTime: Date,
    endTime: Date,
    days: [Number]
})

const Routine = mongoose.model("RoutineModel", routineSchema)
module.exports = Routine
