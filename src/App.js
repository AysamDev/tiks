import React, {Component} from 'react';
import { BrowserRouter as Router,Route,Link,Redirect,Switch} from "react-router-dom";
import './App.css';
import UserContainer from './components/user-container/UserContainer';
import LetsPlan from './components/tiks-container/letsplan/LetsPlan'
import Home from './components/tiks-container/home/Home';
import Routine from './components/tiks-container/routine/Routine';
import SignIn from './components/user-container/SignIn';
import SignUp from './components/user-container/SignUp';
class App extends Component {

  render() {
   
    return (
      <div>
        <UserContainer /> 
        </div>
    )
     
    
  }
}

export default App;
