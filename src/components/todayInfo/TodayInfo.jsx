import React, { Component } from 'react'

import './styles.sass'

export default class TodayInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <div className="today-block__info-block">
        <div className="info-block__item">
            <span className="info-block__label">Влажность</span>
            <span className="info-block__value">{parseInt(this.props.humidity*100)}%</span>
        </div>
        <div className="info-block__item">
            <span className="info-block__label">Скорость ветра</span>
            <span className="info-block__value">{this.props.wind} м/с</span>
        </div>
        <div className="info-block__item">
            <span className="info-block__label">Давление</span>
            <span className="info-block__value">{this.props.pressure} мм.рт.ст.</span>
        </div>
    </div>
    )
  }
}
