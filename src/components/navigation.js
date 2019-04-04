import React, { Component } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Nav,
  NavItem,
} from "reactstrap"
import ScrollchorItem from "./scrollchor-item"
import Scrollspy from "react-scrollspy"
import "font-awesome/css/font-awesome.min.css"
import "./navigation.css"

class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="navbar">
        <span className="navbar-toggle">
          <i className="fa fa-bars" />
        </span>
        <div className="social">
          <a href="#">
            <i className="fa fa-github" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
        </div>
        <ul className="main-nav" id="js-menu">
          <li>
            <a href="#" className="nav-links">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
