import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import { observer,inject } from 'mobx-react'
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class AddRoutine extends Component {
  inputHandler = (event) => 
  {
    this.props.GeneralStore.handleInput(event)
  }
   handleDays = (event) => {
    this.props.GeneralStore.setDayPicked(event.target.value);
  };

  setRoutineStartTime = (date) => {

    this.props.GeneralStore.setRoutineStartTime(date);
  }

  setRoutineEndTime = (date) => {

    this.props.GeneralStore.setRoutineEndTime(date);
  }

  addRoutine = () =>
  {
    this.props.RoutineManager.addRoutine()
  }
    render() {
      let days= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
      return (
     <div>
        <h3>My Routines</h3>
        <div>
          <div>Routine Title </div>
          <input name="routineTitle" type="text" placeholder="routine title..." value={this.props.GeneralStore.routineTitle} onChange={this.inputHandler}/>
       </div>
       <div>
          <span>Search By </span>
          <select name="routineSearchBy" id="taskSearchBy" value={this.props.GeneralStore.routineSearchBy} onChange={this.inputHandler}>
          <option value="place">Place</option>
          <option value="category">Category</option>
          </select>
          <br></br>
          <input name="routinePlace" type="text" placeholder="place..." value={this.props.GeneralStore.routinePlace} onChange={this.inputHandler}/>
       </div>

        <InputLabel id="select-multiple-days">Select Days </InputLabel>
        <Select
          name="dayPicked"
          labelId="select-multiple-days-label"
          id="select-multiple-days-checkbox"
          multiple
          value={this.props.GeneralStore.dayPicked}
          onChange={this.inputHandler}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
        >
          {days.map((day) => (
            <MenuItem key={day} value={day}>
              <Checkbox checked={this.props.GeneralStore.dayPicked.indexOf(day) > -1} />
              <ListItemText primary={day} />
            </MenuItem>
          ))}
        </Select>
        <h4>Approximate Time </h4>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <TimePicker
              name="routineStartTime"
              margin="normal"
              id="time-picker"
              label="Start Time"
              disablePast
              value={this.props.GeneralStore.routineStartTime}
              onChange={this.setRoutineStartTime}
        
            />
            <TimePicker
              name="routineEndTime"
              margin="normal"
              id="time-picker"
              label="End Time"
              disablePast
              value={this.props.GeneralStore.routineEndTime}
              onChange={this.setRoutineEndTime}
        
            />
          </Grid>
      </MuiPickersUtilsProvider>
      <button onClick={this.addRoutine}>Add Routine</button>
     </div>
        )
    }
  }
  
  export default inject("GeneralStore","TaskManager","RoutineManager")(observer(AddRoutine));