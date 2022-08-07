import React, { Component } from 'react'

import TodayInfo from '../todayInfo/TodayInfo'

import './styles.sass'

export default class TodayBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherType: {
        'cloudly': 'ОБЛАЧНО',
        'sunny': 'ЯСНО',
        'overcloudly': 'ПАСМУРНО',
        'low_rain': 'НЕБОЛЬШОЙ ДОЖДЬ',
        'rain': 'ДОЖДЬ',
        'hard_rain': 'ЛИВНИ',
        'thunder': 'ГРОЗА'
      }
    }
  }
  
  render() {  
    return (
      <section className={`today-block today-block_${this.props.weather.now.weather}`}>
        <h2 className='today-block__city'>{this.props.weather.heading}</h2>
        <div className='today-block__temp'>{this.props.weather.now.temperature}°</div>
        <h3 className='today-block__weather'>{this.state.weatherType[this.props.weather.now.weather]}</h3>
        <TodayInfo {...this.props.weather.now} />
      </section>
    )
  }
}
