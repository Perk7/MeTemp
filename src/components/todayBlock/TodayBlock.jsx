import React, { Component } from 'react'
import { makeIconPath } from '../../parsers'

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
      <header className='header-block'>
        <section className='today-block'>
          <h2 className='today-block__city'>{this.props.weather.heading}</h2>
          <div className="today-block__content">
            <div className="today-block__info">
              <div className='today-block__temp'>{this.props.weather.now.temperature}</div>
              <h3 className='today-block__weather'>{this.state.weatherType[this.props.weather.now.weather]}</h3>
              <TodayInfo {...this.props.weather.now} />
            </div>
            <img className="today-block__icon" src={makeIconPath(this.props.weather.now.weather)} alt="" />
          </div>
        </section>
        <h2 className='main-logo-heading'>MeTemp</h2>
      </header>
    )
  }
}
