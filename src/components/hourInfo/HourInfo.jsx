import React, { Component } from 'react'

import './styles.sass'

export default class HourInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="hour-info">
        <span className="hour-info__time">{this.props.time}</span>
        <span className="hour-info__temp">{this.props.data.temperature}°</span>
        <img src={`weather-icons/${this.props.data.weather}.svg`} alt={this.props.data.weather} className="hour-info__weather" />
      </div>
    )
  }
}
