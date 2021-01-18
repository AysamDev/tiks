import { observable, makeObservable, action } from 'mobx'

export class GeneralStore
{
    constructor()
    {
        
        makeObservable(this, {
            handleInput: action
        })
    }

    handleInput(event)
    {
        const {name,value} = event.target
        console.log(event.target)
        this[name] = value
        console.log(this.search)
    }

}