const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tasksSchema = new Schema({
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
    date: Date
})

const Tasks = mongoose.model("TasksModel", tasksSchema)
module.exports = Tasks
