import React, { Component } from "react"
import Scrollspy from "react-scrollspy"
import "./navigation.css"
import Scrollchor from "react-scrollchor"
import NavItem from "./nav-item"

class Navigation extends Component {
  constructor(props) {
    super(props)

    const menu = {
      about: {
        name: "About.",
        ref: React.createRef(),
        to: "#about",
        isInternal: true,
      },
      skills: {
        name: "Skills.",
        ref: React.createRef(),
        to: "#skills",
        isInternal: true,
      },
      contact: {
        name: "Contact.",
        ref: React.createRef(),
        to: "#contact",
        isInternal: true,
      },
      resume: {
        name: "Resume.",
        ref: React.createRef(),
        to: "#",
        isInternal: false,
      },
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.checkLocation = this.checkLocation.bind(this)

    this.state = {
      menu,
      isOpen: false,
    }
  }

  toggleMenu() {
    this.setState({
      isOpen: this.state.isOpen ? false : true,
    })
  }

  componentDidMount() {
    this.checkLocation()

    const hash = window.location.hash

    // ugly hack to scroll to the hash at start
    if (hash !== "") {
      const element = document.querySelector(hash)
      setTimeout(() => {
        const top = element.getBoundingClientRect().top

        window.scrollTo({
          top,
          behavior: "smooth",
        })
      }, 100)
    }
  }

  checkLocation() {
    const hash = window.location.hash
    const { menu } = this.state
    Object.keys(this.state.menu).map(item => {
      if (menu[item].to === hash) {
        menu[item].ref.current.setOn()
      } else {
        menu[item].ref.current.setOff()
      }
    })
  }

  render() {
    const { isOpen, menu } = this.state
    const navItems = []

    Object.keys(menu).map(item => {
      navItems.push(
        <NavItem
          key={item}
          to={menu[item].to}
          name={menu[item].name}
          ref={menu[item].ref}
          isInternal={menu[item].isInternal}
          afterNav={this.checkLocation}
          onClick={this.toggleMenu}
        />
      )
    })

    return (
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <span className="navbar-toggle" onClick={this.toggleMenu}>
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
        <ul className="main-nav active" id="js-menu">
          {navItems}
        </ul>
      </nav>
    )
  }
}

export default Navigation
