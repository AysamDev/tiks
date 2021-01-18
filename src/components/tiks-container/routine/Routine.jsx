import React, {Component} from 'react';
import AddRoutine from './AddRoutine';
import RoutineList from './RoutineList';
import SelectDaysPopUp from './SelectDaysPopUp';

class Routine extends Component {
    
    render() {
      
      return (
     <div>Routine
       <AddRoutine />
       <RoutineList />
       <SelectDaysPopUp />
     </div>
        )
    }
  }
  
  export default Routine;