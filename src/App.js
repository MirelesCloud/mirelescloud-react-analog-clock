import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    const now = new Date();
    this.state = {
      seconds: now.getSeconds(),
      minutes: now.getMinutes(),
      hours: now.getHours(),

    }
    console.log(this.state.hours)
  }

  tick() {
    const now = new Date();
    this.setState({
      seconds: now.getSeconds(),
      minutes: now.getMinutes(),
      hours: now.getHours()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const hours = (((this.state.hours) / 60) * 360) + 180
    const minutes = (((this.state.minutes) / 60) * 360) + 90
    const seconds = (((this.state.seconds) / 60) * 360) + 90

    return (
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour-hand" style={{
              transform: `rotate(${hours}deg)`
            }}></div>
          <div className="hand min-hand" style={{
              transform: `rotate(${minutes}deg)`
            }}></div>
          <div className="hand second-hand" style={{
              transform: `rotate(${seconds}deg)`
            }}></div>
        </div>
      </div>
    )
  }
}

export default App;
