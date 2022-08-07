import React, { Component } from 'react'
import HourInfo from '../hourInfo/HourInfo'
import WeekDay from '../weekDay/WeekDay'
import { parseDate } from '../../parsers'

import './styles.sass'

export default class DaysBlock extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      'selected': 'today',

      'dict': {
        'morning': 'Утро',
        'day': 'День',
        'evening': 'Вечер',
        'night': 'Ночь'
      }
    }

    this.changeSelectedDay = this.changeSelectedDay.bind(this)
  }

  makeTimeReadable(time) {
    if (time.indexOf(':') !== -1) {
      return time
    }

    return this.state.dict[time]
  }

  changeSelectedDay(event) {
    this.setState({
      'selected': event.currentTarget.id
    })
  }

  render() {
    return (
        <div className="days-block">
          <div className="selected-date">{parseDate(this.state.selected)}</div>
          <div className="days-block__inner">
            {Object.keys(this.props.weather.week[this.state.selected]).filter(key => !key.startsWith('default')).map(key =>
              <HourInfo key={key} time={this.makeTimeReadable(key)} data={this.props.weather.week[this.state.selected][key]} />
            )}
          </div>
          <div className="days-block__inner">
            {Object.keys(this.props.weather.week).map(key =>
              <WeekDay key={key} date={key} selected={this.state.selected === key} onClick={this.changeSelectedDay} data={this.props.weather.week[key]} />
            )}
          </div>
        </div>
    )
  }
}
