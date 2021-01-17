import { observable, makeObservable } from 'mobx'
import { Task } from './Task'
export class Routine extends Task
{
    constructor(title,place,startTime,endTime,selectedDays)
    {

        this.days = selectedDays
        super(title,place,startTime,endTime)

        makeObservable(this, {
          days: observable
        })
    }

}
