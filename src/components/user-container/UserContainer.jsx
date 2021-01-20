import React, {Component} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { BrowserRouter as Router,Route,Link,Redirect } from "react-router-dom";


class UserContainer extends Component {
    
    render() {
      
      return (
        <Router>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/signup" render={() => <SignUp />}/>
        <Redirect to="/home" from='/home'></Redirect>
        <Redirect to="/signin" from='/'></Redirect>
        </Router>
        )
    }
  }
  
  export default UserContainer;