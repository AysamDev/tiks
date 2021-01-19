import React, {Component} from 'react';
import TimeKeeper from 'react-timekeeper';
import '../../../style/mapPopUp.css'
class ClockPopUp extends Component {
      constructor()
      {
        super()
        this.state = {
          time: {
            hour: 4,
            minute: 55,
            meridiem: 'pm'
        },
          showTime: true
        }
      }
    render() {
      return (
        <div>
            {this.state.showTime &&
                <div className="map-popup">
                  <div className="map-popup-inner">
                  <TimeKeeper
                    time={this.state.time}
                    onChange={(newTime) => 
                    {
                      let time = {
                        hour: newTime.hour12,
                        minute: newTime.minute,
                        meridiem: newTime.meridiem
                      }
                      this.setState({time: time})
                    }}
                    onDoneClick={() => this.setState({showTime: false})}
                    switchToMinuteOnHourSelect
                />
                  </div>
                </div>
            }
            <span>Time is {this.state.time.hour}:{this.state.time.minute} {this.state.time.meridiem} </span>
            {!this.state.showTime &&
                <button onClick={() => this.setState({showTime: true})}>Show</button>
            }
        </div>
        )
    }
  }
  
  export default  ClockPopUp;