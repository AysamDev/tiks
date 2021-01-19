import React, {Component} from 'react';
import { observer,inject } from 'mobx-react'
class AddTask extends Component {
  inputHandler = (e) =>
  {
      this.props.GeneralStore.handleInput(e)
  }
  
  addTemporaryTask = () =>
  {
    this.props.TaskManager.addTemporaryTask()
  }
    render() {
      
      return (
     <div className="add-task">
       <h3>Let's Plan Your Day</h3>
       <div>
          <div>Task Title </div>
          <input name="taskTitle" type="text" placeholder="task title..." value={this.props.GeneralStore.taskTitle} onChange={this.inputHandler}/>
       </div>
       <div>
          <span>Search By </span>
          <select name="taskSearchBy" id="taskSearchBy" value={this.props.GeneralStore.taskSearchBy} onChange={this.inputHandler}>
          <option value="place">Place</option>
          <option value="category">Category</option>
          </select>
          <br></br>
          <input name="taskPlace" type="text" placeholder="place..." value={this.props.GeneralStore.taskPlace} onChange={this.inputHandler}/>
       </div>
       <div className="task-time">
            <div>Approximate Time </div>
            <button>Start Time</button>
            <button>End Time</button>
       </div>
       <div className="task-priority">
            <span>Priority </span>
            <select name="taskPriority" id="taskPriority" value={this.props.GeneralStore.taskPriority} onChange={this.inputHandler}>
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
            </select>
       </div>
          <button type="submit" onClick={this.addTemporaryTask}>Add Task</button>
     </div>
        )
    }
  }
  
  export default inject("GeneralStore","TaskManager")(observer(AddTask));