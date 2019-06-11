import React, { Component } from "react"

class JobItem extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)

    this.state = {
      isHover: false,
    }
  }

  onMouseOver() {
    this.setState({
      isHover: true,
    })
  }

  onMouseOut() {
    this.setState({
      isHover: false,
    })
  }

  onClick() {
    this.props.onClickItem(this.props.id)
  }
  render() {
    const { years, transitionDelay, isOn } = this.props
    const { isHover } = this.state
    return (
      <li
        className={`job-item ${isOn || isHover ? "fadein" : ""}`}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onClick={this.onClick}
        style={{ transitionDelay: `${transitionDelay}ms` }}
      >
        {years}
      </li>
    )
  }
}

export default JobItem
