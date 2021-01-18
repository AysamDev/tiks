import React, {Component} from 'react';
import NavBar from '../tiks-container/navbar/NavBar';
import TaskManagerContainer from '../tiks-container/taskManagerContainer/TaskManagerContainer';


class SignIn extends Component {
    
    render() {
      
      return (
     <div>
         <TaskManagerContainer/>
         <NavBar/>
     </div>

     
        )
    }
  }
  
  export default SignIn;