const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    surname: String,
    allTasks: [{type: Schema.Types.ObjectId, ref: 'TasksModel'}],
    routines: [{type: Schema.Types.ObjectId, ref: 'RoutineModel'}],
})

const User = mongoose.model("UserModel", userSchema)
module.exports = User
