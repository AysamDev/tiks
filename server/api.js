const express = require('express')
const router = express.Router()
const Routine = require('./models/routineSchema')
const Tasks = require('./models/tasksSchema')
const Task = require('./models/taskSchema')
const User = require('./models/userSchema')

// ROUTES

router.post('/userSignUp', function(request, response){
    let params = request.body
    let user = new User({username: params.username, password: params.password, name: params.name, surname: params.surname})
    user.save()
    response.send("Profile created successfuly")
})

router.post('/userSignIn', function(request, response){
    let params = request.body
    User.find({username: params.username}, function(err, user){
        if(user){
            if(user[0].password === params.password){
                response.send(user[0])
            }else{
                response.send("Wrong password")
            }
        }else{
            response.send(err)
        }
    })
})

router.post('/userTasksPerDay', function(request, response){
    let username = request.body.username
    let date = request.body.date
    User.findOne({username: username}).populate({
        path: 'allTasks',
        match: {date: date},
        populate:{
            path: 'tasks',
        }
    }).exec(function(err, user){
        response.send(user.allTasks[0].tasks)
    })
})

router.post('/deleteUserTask', function(request, response){
    let username = request.body.username
    let date = request.body.date
    let taskID = request.body.taskID
    User.findOne({username: username}).populate({
        path: 'allTasks',
        match: {date: date},
        populate:{
            path: 'tasks',
            match: {_id: taskID}
        }
    }).exec(function (err, user) {
        user.allTasks[0].tasks[0].remove(function (err){
            if(err === null){
                response.send("removed")
            }else{
                console.log("removing failed - " + err)
                response.send("failed to remove")
            }
        })
    })
})

router.put('/completeTask', function(request, response){
    let username = request.body.username
    let date = request.body.date
    let taskID = request.body.taskID
    User.findOne({username: username}).populate({
        path: 'allTasks',
        match: {date: date},
        populate:{
            path: 'tasks',
            match: {_id: taskID}
        }
    }).exec(function (err, user){
        user.allTasks[0].tasks[0].completed = !user.allTasks[0].tasks[0].completed
        user.allTasks[0].tasks[0].save()
    })
    response.send("task completed")
})

router.post('/userRoutine', function(request, response){
    let username = request.body.username
    let routineParams = request.body.routine
    let routine = new Routine({title: routineParams.title, location: routineParams.location, startTime: routineParams.startTime,endTime: routineParams.endTime, days: routineParams.days})
    routine.save()
    User.find({username: username}, function(err, user){
        if(!user){
            response.send("User not found")
        }else{
            user[0].routines.push(routine)
            user[0].save()
            response.send("Routine added successfuly")
        }
    })
})

router.get('/userRoutines/:username', function(request, response){
    let username = request.params.username
    User.findOne({username: username}).populate('routines').exec(function (err, user){
        response.send(user.routines)
    })
})

router.delete('/userRoutines', function(request, response){
    let username = request.body.username
    let routineID = request.body.routineID
    User.findOne({username: username}).populate({
        path: 'routines',
        match: {_id: routineID},
    }).exec(function (err, user){
        user.routines[0].remove()
        user.save()
        response.send("Routine removed successfuly")
    })

})

router.post('/submitUserTasks', function(request, response){
    let username = request.body.username
    let tasksArr = request.body.tasksArray
    let date = request.body.date
    let newTasks = new Tasks({date: date})
    newTasks.save()
    User.find({username: username}, function(err, user){
        if(!user[0]){
            response.send("User not found")
        }else{
            user[0].allTasks.push(newTasks)
            user[0].save()
        }
    })
    User.findOne({username: username}).populate({
        path: 'allTasks',
        match: {date: date},
        populate:{
            path: 'tasks'
        }
    }).exec(function (err, user){
        tasksArr.forEach(t => {
            let task = new Task({title: t.title, location: t.location, startTime: t.startTime,endTime: t.endTime, priority: t.priority, completed: false})
            task.save()
            user.allTasks[0].tasks.push(task)
        })
        user.allTasks[0].save()
        response.send("Tasks added successfly")
    })
})


module.exports = router