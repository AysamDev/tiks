import { observable, makeObservable } from 'mobx'
export class Task
{
    constructor(title,place,startTime,endTime,priority = null)
    {
        this.id = null
        this.title = title
        this.place = place
        this.startTime = startTime
        this.endTime = endTime
        this.priority = priority
        this.completed = false

        makeObservable(this, {
            id: observable,
            title: observable,
            place: observable,
            startTime: observable,
            endTime: observable,
            priority: observable,
            completed: observable
    
        })
    }

}
