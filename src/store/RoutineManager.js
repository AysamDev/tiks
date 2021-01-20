import { observable, makeObservable, action } from 'mobx'
import { Routine } from './Routine'
import axios from 'axios'

export class RoutineManager
{
    constructor()
    {
        this.routines = []
        makeObservable(this, {
          routines: observable,
          addRoutine: action,
          getRoutines: action,
          deleteRoutine: action

        })
    }

    getRoutines = async (username) =>
    {
        let response = await axios.get(`http://localhost:${process.env.PORT}/userRoutines/${username}`)
        this.routines = response.data
    }
    addRoutine = async (username,title,place,startTime,endTime,selectedDays) =>
    {
        let routine = new Routine(title,place,startTime,endTime,selectedDays)
        let response = await axios.post(`http://localhost:${process.env.PORT}/userRoutine`,{username,routine})
    }

    deleteRoutine = async (id) =>
    {
        let response = await axios.delete(`http://localhost:${process.env.PORT}/userRoutine`,{id})
    }

}