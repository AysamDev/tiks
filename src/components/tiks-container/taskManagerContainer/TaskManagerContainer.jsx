import React, {Component} from 'react';
import Home from '../home/Home';
import LetsPlan from '../letsplan/LetsPlan';
import Reports from '../reports/Reports';
import Routine from '../routine/Routine';

class TaskManagerContainer extends Component {
    
    render() {
      
      return (
     <div>
          {/* <Home />  */}
         {/* <LetsPlan /> */}
          <Routine /> 
         <Reports />
     </div>
        )
    }
  }
  
  export default TaskManagerContainer;