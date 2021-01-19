import React, {Component} from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import ClockPopUp from './ClockPopUp';

class LetsPlan extends Component {
    
    render() {
      
      return (
     <div className="lets-plan">
         <AddTask />
         <ClockPopUp />
         <TaskList />

     </div>
        )
    }
  }
  
  export default LetsPlan;