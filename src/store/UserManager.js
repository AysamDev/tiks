import { observable, makeObservable, action } from 'mobx'

export class UserManager
{
    constructor()
    {
        
        makeObservable(this, {
          userSignIn: action,
          userSignUp: action

        })
    }

    userSignIn = async (username,password) =>
    {
        let response = await axios.post(`http://localhost:${PORT}/userSignIn`,{username,password})

    }
    userSignUp = async (user) =>
    {

        let response = await axios.post(`http://localhost:${PORT}/userSignUp`,{user})
    }
}