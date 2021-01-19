import React, {Component} from 'react';
import List from '@material-ui/core/List';
import { observer,inject } from 'mobx-react'
import Task from '../home/Task'
class TaskList extends Component {
    
    render() {
        let tasks = [{title: 'Grocery',place:'Shufersal Haifa'},{title: 'Workout',place:'Holmes Places Haifa'}]
      return (
     <div className="tasks-container">
          <List>
              {tasks.map((t,index) =>
                <Task key={index} task={t}/>
              )}
          </List>
          <button type="submit">Submit Tasks</button>
     </div>
        )
    }
  }
  
  export default inject("GeneralStore","TaskManager")(observer(TaskList));