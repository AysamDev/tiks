import { observable, makeObservable, action } from 'mobx'

export class GeneralStore
{
    constructor()
    {
        this.taskTitle = ""
        this.taskSearchBy = "place"
        this.taskPlace = ""
        this.taskPriority = 1

        this.day = new Date();
        this.openMap = false

        makeObservable(this, {
            day: observable,

            taskTitle: observable,
            taskSearchBy: observable,
            taskPlace: observable,
            taskPriority: observable,

            openMap:observable,
            handleInput: action,
            changeMapState: action
        })
    }

    handleInput(event)
    {
        const {name,value} = event.target
        console.log(event.target)
        this[name] = value
        console.log(this[name])
    }

    changeMapState = (value) =>
    {
        this.openMap = value
    }
}