import { observable, makeObservable, action } from 'mobx'
import { Routine } from './Routine'
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
        let response = await axios.get(`http://localhost:${PORT}/userRoutines/${username}`)
        this.routines = response.data
    }
    addRoutine = async (title,place,startTime,endTime,selectedDays) =>
    {
        let routine = new Routine(title,place,startTime,endTime,selectedDays)
        let response = await axios.post(`http://localhost:${PORT}/userRoutine`,{username,routine})
    }

    deleteRoutine = async (id) =>
    {
        let response = await axios.delete(`http://localhost:${PORT}/userRoutine`,{id})
    }

}