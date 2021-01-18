const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    usernamw: String,
    password: String,
    name: Date,
    surname: Date,
    allTasks: [{type: Schema.Types.ObjectId, ref: 'Tasks'}],
    routines: [{type: Schema.Types.ObjectId, ref: 'Routine'}],
})

const User = mongoose.model("UserModel", userSchema)
module.exports = User
