import React, {Component} from 'react';
import List from '@material-ui/core/List';
import { observer,inject } from 'mobx-react'
import Task from '../home/Task'
class RoutineList extends Component {
    
    render() {
      let routines = [{title: 'Grocery',place:'Shufersal Haifa'},{title: 'Workout',place:'Holmes Places Haifa'}]
      return (
     <div>
          <List>
              {routines.map((r,index) =>
                <Task key={index} task={r}/>
              )}
          </List>
     </div>
        )
    }
  }
  
  export default RoutineList;