import React, { Component } from 'react'
import './styles.sass'

import ScrollContainer from 'react-indiana-drag-scroll'

export default class ScrollBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      need: true
    }

    this.scrollBlock = React.createRef();

    this.scrollTo = this.scrollTo.bind(this);
    this.checkNeed = this.checkNeed.bind(this);
  }

  componentDidMount() {
    this.checkNeed()
  }

  componentDidUpdate() {
    this.checkNeed()
  }

  checkNeed() {
    if (this.scrollBlock.current) {
      const eq = (this.scrollBlock.current.scrollWidth > this.scrollBlock.current.clientWidth)
      if (eq !== this.state.need) {
        this.setState({
          need: eq
        })
      }
    }
  }
  
  scrollTo(direction) {
    const currentScrollValue = this.scrollBlock.current.scrollLeft
    const maxScrollValue = this.scrollBlock.current.scrollWidth
    switch (direction) {
        case 'left':
            this.scrollBlock.current.scrollLeft = Math.max(0, currentScrollValue - 500)
            break
        case 'right':
            this.scrollBlock.current.scrollLeft = Math.min(maxScrollValue, currentScrollValue + 500)
            break
        default:
            break
    }
  }

  render() {
    const need = this.state.need ? '' : 'scroll__scroll-btn_off'

    return (
      <div className='scroll__scroll-controls-overlay'>
        <button className={`${need} scroll__scroll-btn scroll__scroll-btn_left`} onClick={() => this.scrollTo('left')}></button>
          
        <ScrollContainer className={`${this.props.parentClass || ''} days-block__inner`} innerRef={this.scrollBlock} hideScrollbars={false}>
          {this.props.children}
        </ScrollContainer>
        <button className={`${need} scroll__scroll-btn`} onClick={() => this.scrollTo('right')}></button>
      </div>
    )
  }
}
