import { observable, makeObservable, action } from 'mobx'
import { Task } from './Task'
import axios from 'axios'
export class TaskManager
{
    constructor()
    {
        this.tasks = []
        this.temporaryTasks = []

        makeObservable(this, {
            tasks: observable,
            temporaryTasks: observable,
            addTask: action,
            deleteTemporaryTask: action,
            getTasks: action,
            taskCompleted: action,
            deleteTask: action,
            updateTask: action,
            submitTasks: action,
            numItems: computed
        })
    }

    addTask = (title,place,startTime,endTime,priority) =>
    {
        let task = new Task(title,place,startTime,endTime,priority)
        let checkTask = this.temporaryTasks.find(t => t.title === task.title)
        checkTask?
        alert("task title already exist, please enter another title.")
        :
        this.temporaryTasks.push(task)

    }

    deleteTemporaryTask = (title) =>
    {
        let taskIndex = this.temporaryTasks.findIndex(t => t.title === title)
        this.temporaryTasks.splice(taskIndex,1)
    }

    getTasks = async (username,date) =>
    {
        
        let response = await axios.get(`http://localhost:${PORT}/userTasksPerDay/${username}/${date}`)
        this.tasks = response.data
    }

    taskCompleted = async (username,date,taskID) =>
    {
        
        await axios.put(`http://localhost:${PORT}/completeTask`,{username,date,taskID})
    }

    deleteTask = async (username,date,taskID) =>
    {
        
        await axios.delete(`http://localhost:${PORT}/deleteUserTask`,{username,date,taskID})
    }

    updateTask = async (username,date,taskID,property,value) =>
    {
        await axios.put(`http://localhost:${PORT}/updateTask`,{username,date,taskID,property,value})
    }

    submitTasks = async (username,date) =>
    {
        let response = await axios.post(`http://localhost:${PORT}/submitUserTasks`,{username,date,taksArray: this.temporaryTasks})
        console.log(response.data)
        this.temporaryTasks = []

    }
    get numTasks()
    {
        return this.temporaryTasks.length
    }

}