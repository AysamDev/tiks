import { observable, makeObservable, action } from 'mobx'
import axios from 'axios'
export class UserManager
{
    constructor()
    {
        this.username = ''
        this.password = ''
        this.userCanSignIN = false
        makeObservable(this, {
        username:observable,
        password: observable,
        userCanSignIN: observable,
          userSignIn: action,
          userSignUp: action,
          handleInput: action

        })
    }
    handleInput = (event) => 
    {
        const {name,value} = event.target
        this[name] = value
    }
    userSignIn = async (username,password) =>
    {
        let response = await axios.post(`http://localhost:${process.env.PORT}/userSignIn`,{username,password})


    }
    userSignUp = async (username, password, name, surname) =>
    {

        let response = await axios.post(`http://localhost:${process.env.PORT}/userSignUp`,{username, password, name, surname})
    }
}