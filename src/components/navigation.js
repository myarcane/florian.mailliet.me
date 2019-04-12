import React, { Component } from "react"
import Scrollspy from "react-scrollspy"
import "./navigation.css"
import Scrollchor from "react-scrollchor"

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.about = React.createRef()
  }

  componentDidMount() {
    if (window.location.hash) {
      this.about.current.simulateClick()
    }
  }

  render() {
    return (
      <nav className="navbar">
        <span className="navbar-toggle">
          <i className="fa fa-bars" />
        </span>
        <div className="social">
          <a href="https://github.com/myarcane/">
            <i className="fa fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/florian-mailliet-30682b183/">
            <i className="fa fa-linkedin" />
          </a>
        </div>
        <Scrollspy items={["about"]}>
          <ul className="main-nav" id="js-menu">
            <li>
              <Scrollchor to="#about" ref={this.about} className="nav-links">
                About
              </Scrollchor>
            </li>
            <li>
              <a href="#" className="nav-links">
                Experience
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Resume
              </a>
            </li>
          </ul>
        </Scrollspy>
      </nav>
    )
  }
}

export default Navigation
