import React, { Component } from "react"
// import Scrollspy from "react-scrollspy"
import "./navigation.css"
import NavItem from "./nav-item"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"

class Navigation extends Component {
  constructor(props) {
    super(props)

    const menu = {
      about: {
        name: "01. About",
        ref: React.createRef(),
        to: "#about",
        isInternal: true,
      },
      work: {
        name: "02. Work",
        ref: React.createRef(),
        to: "#work",
        isInternal: true,
      },
      skills: {
        name: "03. Skills",
        ref: React.createRef(),
        to: "#skills",
        isInternal: true,
      },
      contact: {
        name: "04. Contact",
        ref: React.createRef(),
        to: "#contact",
        isInternal: true,
      },
      resume: {
        name: "RESUME.",
        ref: React.createRef(),
        to: "/resume.pdf",
        isInternal: false,
      },
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.checkLocation = this.checkLocation.bind(this)
    this.onResize = this.onResize.bind(this)

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

  closeMenu() {
    this.setState({
      isOpen: false,
    })
  }

  getLocationHash() {
    if (window) {
      return window.location.hash
    } else {
      return ""
    }
  }

  onResize() {
    // if screen size is large screen
    // isOpen is always set to false
    if (window.matchMedia("(min-width: 768px)").matches) {
      this.setState({
        isOpen: false,
      })
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener("resize", this.onResize)
    }
  }

  componentDidMount() {
    this.checkLocation()

    const hash = this.getLocationHash()

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

    if (window) {
      window.addEventListener("resize", this.onResize)
      this.onResize()
    }
  }

  checkLocation() {
    const { menu } = this.state
    Object.keys(this.state.menu).map(item => {
      if (menu[item].to === this.getLocationHash()) {
        menu[item].ref.current.setOn()
      } else {
        menu[item].ref.current.setOff()
      }
    })
  }

  render() {
    const { isOpen, menu } = this.state
    const navItems = []

    if (isOpen) {
      disableBodyScroll(this.state.mainTarget)
    } else {
      enableBodyScroll(this.state.mainTarget)
    }

    Object.keys(menu).map(item => {
      navItems.push(
        <NavItem
          key={item}
          to={menu[item].to}
          name={menu[item].name}
          ref={menu[item].ref}
          isInternal={menu[item].isInternal}
          afterNav={this.checkLocation}
          onClick={this.closeMenu}
        />
      )
    })

    return (
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <span className="navbar-toggle" onClick={this.toggleMenu}>
          <i className="fa fa-bars" />
        </span>
        <div className="social">
          <a
            href="https://github.com/myarcane/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <i className="fa fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/florianmailliet/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
          </a>
        </div>
        <div className="main-nav active" id="js-menu">
          {navItems}
        </div>
      </nav>
    )
  }
}

export default Navigation
