import { observable, makeObservable } from 'mobx'
import { Task } from './Task'
export class Routine extends Task
{
    constructor(title,place,startTime,endTime,selectedDays)
    {
      super(title,place,startTime,endTime)
        this.days = selectedDays
        

        makeObservable(this, {
          days: observable
        })
    }

}
