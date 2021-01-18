const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: String,
    location: String,
    startTime: Date,
    endTime: Date,
    priority: Number,
    completed: Boolean
})

const Task = mongoose.model("TaskModel", taskSchema)
module.exports = Task
