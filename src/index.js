import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import {Provider} from 'mobx-react'
import {TaskManager as taskManager} from '../src/store/TaskManager'
import {GeneralStore as generalStore} from '../src/store/GeneralStore'
 import {RoutineManager as routineManager} from '../src/store/RoutineManager'
 import {UserManager as userManager} from '../src/store/UserManager'

const TaskManager = new taskManager()
const GeneralStore = new generalStore()
 const RoutineManager = new routineManager()
 const UserManager = new userManager()

const stores = {
  TaskManager,
  GeneralStore,
   RoutineManager,
   UserManager
}
ReactDOM.render(
  <Router>
  <Provider {... stores}>
  <App />
  </Provider>
  </Router>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
