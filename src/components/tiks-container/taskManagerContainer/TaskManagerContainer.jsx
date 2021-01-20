import React, {Component} from 'react';
import Home from '../home/Home';
import LetsPlan from '../letsplan/LetsPlan';
import Reports from '../reports/Reports';
import Routine from '../routine/Routine';
import { BrowserRouter as Router,Route,Link,Switch,Redirect } from "react-router-dom";

class TaskManagerContainer extends Component {
    
    render() {
      
      return (
      <div >
       <Route exact path="/home" render={() => <Home />}/>
       
       <Route exact path="/letsplan" render={() => <LetsPlan />}/>

       <Route exact path="/routines" render={() => <Routine />}/>

       </div>          
               
     
        )
    }
  }
  
  export default TaskManagerContainer;