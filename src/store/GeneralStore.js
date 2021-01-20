import { observable, makeObservable, action ,toJS } from 'mobx'

export class GeneralStore
{
    constructor()
    {
        this.taskTitle = ""
        this.taskSearchBy = "place"
        this.taskPlace = ""
        this.taskPriority = 1
        this.openClockPopUp = false
        this.selectedClockOpener = ''
        this.startTime = new Date()
        this.endTime = new Date()
        this.day = new Date();
        this.openMap = false

        this.dayPicked = []
        this.routineStartTime = new Date()
        this.routineEndTime = new Date()
        this.routineTitle = ''
        this.routineSearchBy = ''
        this.routinePlace = ''
        
        makeObservable(this, {
            day: observable,
            
            openClockPopUp: observable,
            startTime: observable,
            endTime: observable,
            selectedClockOpener: observable,
            taskTitle: observable,
            taskSearchBy: observable,
            taskPlace: observable,
            taskPriority: observable,

            openMap:observable,

            routineStartTime: observable,
            routineEndTime: observable,
            dayPicked: observable,
            routineTitle: observable,
            routineSearchBy:observable,
            routinePlace: observable,

            setEndTime: action,
            setStartTime: action,
            handleInput: action,
            changeMapState: action,
            changeTimeStatus: action,
            setSelectedClockOpener: action,
            setRoutineStartTime: action,
            setRoutineEndTime: action
        })
    }

    handleInput(event)
    {
        const {name,value} = event.target
        console.log(event.target)
        this[name] = value
    }

    changeMapState = (value) =>
    {
        this.openMap = value
    }

    changeTimeStatus(time,name)
    {
        console.log(name)
        this[name] = time
    }

    changeTimeState(value)
    {
        this.openClockPopUp = value
        console.log(toJS(this.startTime),toJS(this.endTime))
    }

    setSelectedClockOpener(value)
    {
        this.selectedClockOpener = value
        this.changeTimeState(true)
    }

    setStartTime(date)
    {
        this.startTime = date
    }

    setEndTime(date)
    {
        this.endTime = date
    }

    setDayPicked(day)
    {
        this.dayPicked = day
    }

    setRoutineStartTime(date)
    {
        this.routineStartTime = date
    }
    setRoutineEndTime(date)
    {
        this.routineEndTime = date
    }
}