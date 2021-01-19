import React, {Component} from 'react';
import { observer,inject } from 'mobx-react'
import GoogleMapReact from 'google-map-react';
import '../../../style/mapPopUp.css'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapView extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

   handleApiLoaded  (map, maps) {
    // use map and maps objects
  };

  closeMapView = () =>
  {
    this.props.GeneralStore.changeMapState(false)
  }
    render() {
      return (
        <div  className="map-popup" >
        <div className="map-popup-inner">
          <div width='20%' onClick={this.closeMapView}>X</div>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAtY7Se0K0cqw4t-kUwASAwFbFZADSaLkQ'}}
      defaultCenter={this.props.center}
      defaultZoom={this.props.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      />
    </GoogleMapReact>
                
    </div>
      </div>
        )
    }
  }
  
  export default inject("GeneralStore","TaskManager")(observer(MapView));