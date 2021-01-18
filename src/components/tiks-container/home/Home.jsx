import React, {Component} from 'react';
import HeaderDate from './HeaderDate';
import MapView from './MapView';
import TasksView from './TasksView';

class Home extends Component {
    
    render() {
      
      return (
     <div>Home
         <HeaderDate />
         <MapView />
         <TasksView />
     </div>
        )
    }
  }
  
  export default Home;