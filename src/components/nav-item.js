import React, { Component } from "react"
import Scrollchor from "react-scrollchor"

export default class ScrollchorItem extends Component {
  constructor(props) {
    super(props)
    this.navItem = React.createRef()
    this.setOn = this.setOn.bind(this)
    this.setOff = this.setOff.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)

    this.state = {
      isOn: false,
      isHovering: false,
    }
  }

  setOn() {
    if (this.props.isInternal) {
      this.setState({
        isOn: true,
      })
    }
  }

  setOff() {
    this.setState({
      isOn: false,
    })
  }

  onMouseOver() {
    this.setState({
      isHovering: true,
    })
  }

  onMouseOut() {
    this.setState({
      isHovering: false,
    })
  }

  render() {
    const { to, name, onClick, afterNav, isInternal } = this.props
    const { isOn, isHovering } = this.state

    const list = (
      <ul
        onClick={onClick}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        className={isOn || isHovering ? "nav-links--on" : "nav-links--off"}
      >
        <li>{name}</li>
        <li>{name}</li>
      </ul>
    )

    let NavItem

    if (isInternal) {
      NavItem = (
        <Scrollchor
          ref={this.navItem}
          to={to}
          afterAnimate={afterNav}
          className="nav-links"
        >
          {list}
        </Scrollchor>
      )
    } else {
      NavItem = (
        <a
          href={to}
          className="nav-links"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {list}
        </a>
      )
    }

    return NavItem
  }
}
