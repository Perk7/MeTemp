import React, { Component } from 'react'
import {parseDate} from '../../parsers'

import './styles.sass'

export default class WeekDay extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let classForCard = `week-block__item__content ${this.props.selected ? 'week-block__item__content_active' : ''}`
    let iconForCard = this.props.data.default_weather

    return (
      <div className='week-block__item' onClick={this.props.onClick} id={this.props.date}>
        <span className="week-block__item__day">{parseDate(this.props.date)}</span>
        <div className={classForCard}>
            <div className={`week-block__content__weather weather-icon_${iconForCard}`}></div>
            <span className="week-block__content__temp">{this.props.data.default_temperature}°</span>
        </div>
      </div>
    )
  }
}
