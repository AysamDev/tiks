import React, {Component} from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import ClockPopUp from './ClockPopUp';

class LetsPlan extends Component {
    
    render() {
      
      return (
     <div>Lets Plan
         <AddTask />
         <TaskList />
         <ClockPopUp />
     </div>
        )
    }
  }
  
  export default LetsPlan;