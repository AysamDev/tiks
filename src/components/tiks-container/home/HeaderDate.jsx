import React, {Component} from 'react';
import { observer,inject } from 'mobx-react'
class HeaderDate extends Component {
   inputHandler = (e) =>
  {
      this.props.GeneralStore.handleInput(e)
  } 
    render() {
      let user = {
        name: "Ayal"
      }
      return (
     <div className="header-date">
       <div className="user-welcome">
          <div>Welcome Back, {user.name}.</div>
          <div>Let's Organize Your Day</div>
        </div>
       <div className="date-picker">
          <label htmlFor="day">Planning Date </label>
          <input type="date" id="day" name="day" value={this.props.GeneralStore.day} onChange={this.inputHandler}></input>
       </div>

     </div>
        )
    }
  }
  
  export default inject("GeneralStore","TaskManager")(observer(HeaderDate));