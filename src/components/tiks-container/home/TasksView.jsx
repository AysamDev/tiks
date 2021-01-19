import React,{Component} from 'react';
import { observer,inject } from 'mobx-react'
import List from '@material-ui/core/List';
import Task from './Task';

class TasksView extends Component{
    
      render()
        {
        let tasks = [{title: 'Grocery',place:'Shufersal Haifa'},{title: 'Workout',place:'Holmes Places Haifa'}]
        return (
       <div className="tasks-container">
         {
            <List>
              {tasks.map((t,index) =>
                <Task key={index} task={t}/>
              )}
            </List>   
         } 
         
       </div>
        )
      }

    
  }
  
  export default inject("GeneralStore","TaskManager")(observer(TasksView));;