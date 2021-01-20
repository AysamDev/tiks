import React, {Component} from 'react';
import { observer,inject } from 'mobx-react'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


class AddTask extends Component {


  inputHandler = (e) =>
  {
      this.props.GeneralStore.handleInput(e)
  }
  
  addTemporaryTask = () =>
  {
    this.props.TaskManager.addTemporaryTask()
  }

  setStartTime = (date) => {
      this.props.GeneralStore.setStartTime(date)
  };
  setEndTime = (date) => {
    this.props.GeneralStore.setEndTime(date)
};
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
            <div>Approximate Time </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <TimePicker
              name="startTime"
              margin="normal"
              id="time-picker"
              label="Start Time"
              disablePast
              value={this.props.GeneralStore.startTime}
              onChange={this.setStartTime}
        
            />
            <TimePicker
              name="endTime"
              margin="normal"
              id="time-picker"
              label="End Time"
              disablePast
              value={this.props.GeneralStore.endTime}
              onChange={this.setEndTime}
        
            />
          </Grid>
      </MuiPickersUtilsProvider>
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