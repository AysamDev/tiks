import React, {Component} from 'react';
import HeaderDate from './HeaderDate';
import MapView from './MapView';
import TasksView from './TasksView';
import { observer,inject } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'

class Home extends Component {


        changeMapState = () =>
      {
        this.props.GeneralStore.changeMapState(true)
      }
    render() {
     
      return (
     <div className="home">
         <HeaderDate />
         <FontAwesomeIcon icon={faMap} size="10x" onClick={this.changeMapState} color="green"/>
         {this.props.GeneralStore.openMap?<MapView name={this.props.GeneralStore.mapOpener}/>:null}
         <TasksView />
     </div>
        )
    }
  }
  
  export default inject("GeneralStore","TaskManager")(observer(Home));