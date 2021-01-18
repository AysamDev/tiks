import React, {Component} from 'react';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import './App.css';
import UserContainer from './components/user-container/UserContainer';

class App extends Component {

  render() {
   
    return (
      <div className="App">

          <div className="user-container">
             <UserContainer />
          </div>

       
       
      </div>
    )
     
    
  }
}

export default App;
