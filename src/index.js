import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'mobx-react'
import {TaskManager as taskManager} from '../src/store/TaskManager'
import {GeneralStore as generalStore} from '../src/store/GeneralStore'
 import {RoutineManager as routineManager} from '../src/store/RoutineManager'
const TaskManager = new taskManager()
const GeneralStore = new generalStore()
 const RoutineManager = new routineManager()

const stores = {
  TaskManager,
  GeneralStore,
   RoutineManager
}
ReactDOM.render(
  <Provider {... stores}>
  <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
